
// add api key and spreadsheet ID
// make sure google sheets API is enabled
// https://support.google.com/googleapi/answer/6158862?hl=en

var API_KEY = 'AIzaSyCfrdBVJr2o1vCDgb26FlvhApunknAHWII';
var SPREADSHEET_ID = '1KbRktH19-OuEPwduHpIob2FLlzXbu0bwRrd4F57rxNk';
var SHEET_NAME = 'Form Responses 1';


// get spreadsheet data... dont edit any of this

var response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ SPREADSHEET_ID }/values/${ SHEET_NAME }?alt=json&key=${ API_KEY }`);
var data = await response.json();
var [header, ...rows] = data.values;
var entries = rows.map(row => Object.fromEntries(header.map((key, i) => [key.toLowerCase(), row[i] || ""])));


// log entries to the console

console.log(entries);

var entriesContainer = document.querySelector('.entries')

// add entries to the page

entries.forEach((entry) =>{

    // log entry to the console
    console.log(entry)

    // add entries to container 
    entriesContainer.innerHTML += `
    <li class="entry">
        <h2 class="entry-name">${ entry.name }</h2>
        <p class="entry-comment">${ entry.comments }</p>
    </li>
    `;
}); 