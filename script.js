


$(document).ready(function() {

// setting time variables contained within an array //
var timeSlots = [
    moment().hour(09).format("h") + "AM",
    moment().hour(10).format("h") + "AM",
    moment().hour(11).format("h") + "AM",
    moment().hour(12).format("h") + "PM",
    moment().hour(13).format("h") + "PM",
    moment().hour(14).format("h") + "PM",
    moment().hour(15).format("h") + "PM",
    moment().hour(16).format("h") + "PM",
    moment().hour(17).format("h") + "PM",
]

var militaryTime = [
    moment().hour(09).format("H"),
    moment().hour(10).format("H"),
    moment().hour(11).format("H"),
    moment().hour(12).format("H"),
    moment().hour(13).format("H"),
    moment().hour(14).format("H"),
    moment().hour(15).format("H"),
    moment().hour(16).format("H"),
    moment().hour(17).format("H"),
]

// giving the div with the container class the HTML a name //
var containerDiv = $(".container");

// creating a forEach loop that makes a row containing the timeSlots array with a text area and a save button //
$.each(timeSlots, function(i, time) {
    var rowDiv = $("<div>").attr("class", "row time-block").attr("id", militaryTime[i]);
    containerDiv.append(rowDiv);
    var timeDiv = $("<div>").attr("class", "col-1 hour");
    timeDiv.text(time);
    rowDiv.append(timeDiv);
    var textDisplay = $("<textarea>").attr("class", "description col-10");
    rowDiv.append(textDisplay);
    var saveButton = $("<button>").attr("class", "saveBtn fas fa-save col-1");
    rowDiv.append(saveButton);
  });

// appending the current day to the currentday div / achieved by using Moment.js //
var currentDay = moment().format('MMMM Do YYYY');
var currentDayDiv = $("#currentDay");
currentDayDiv.append(currentDay);

// creating local storage function //
renderSavedText();
function renderSavedText() {
    var savedText = localStorage.getItem("text");
    $("textarea")[0].value = localStorage.getItem("text09am");
    $("textarea")[1].value = localStorage.getItem("text10am");
    $("textarea")[2].value = localStorage.getItem("text11am");
    $("textarea")[3].value = localStorage.getItem("text12pm");
    $("textarea")[4].value = localStorage.getItem("text01pm");
    $("textarea")[5].value = localStorage.getItem("text02pm");
    $("textarea")[6].value = localStorage.getItem("text03pm");
    $("textarea")[7].value = localStorage.getItem("text04pm");
    $("textarea")[8].value = localStorage.getItem("text05pm");
}


$("button").on("click", function () {
    event.preventDefault();
    localStorage.setItem("text09am", $("textarea")[0].value);
    localStorage.setItem("text10am", $("textarea")[1].value);
    localStorage.setItem("text11am", $("textarea")[2].value);
    localStorage.setItem("text12pm", $("textarea")[3].value);
    localStorage.setItem("text01pm", $("textarea")[4].value);
    localStorage.setItem("text02pm", $("textarea")[5].value);
    localStorage.setItem("text03pm", $("textarea")[6].value);
    localStorage.setItem("text04pm", $("textarea")[7].value);
    localStorage.setItem("text05pm", $("textarea")[8].value);
    
})


// changing the timeblock color based on time of day //
function hourUpdater() {

var currentHour = moment().hours();
console.log(currentHour);

$(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split(" ")[0]);
    console.log(blockHour);

    if (blockHour < currentHour) {
        $(this).addClass("past");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});
}
hourUpdater();

var interval = setInterval(hourUpdater, 15000);


})
