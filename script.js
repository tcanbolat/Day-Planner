$(document).ready(function() {
    var timeSlots = [
        moment().hour(09).format("h") + " AM",
        moment().hour(10).format("h") + " AM",
        moment().hour(11).format("h") + " AM",
        moment().hour(12).format("h") + " PM",
        moment().hour(13).format("h") + " PM",
        moment().hour(14).format("h") + " PM",
        moment().hour(15).format("h") + " PM",
        moment().hour(16).format("h") + " PM",
        moment().hour(17).format("h") + " PM",
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
    var containerDiv = $(".container");
    
    // creating a forEach loop that makes a row containing the timeSlots array with a text area and a save button //
    $.each(timeSlots, function(i, time) {
        var rowDiv = $("<div>").attr("class", "row time-block").attr("id", `${militaryTime[i]}`);
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

        $.each($("textarea"), function(i) {
            $("textarea")[i].value = localStorage.getItem("textarea" + [i]);
        })
    }
    $.each($("button"), function(i) {
        $("button").on("click", function () {
        localStorage.setItem("textarea" + [i], $("textarea")[i].value);   
        })
      })

    // changing the timeblock color based on time of day //
    function colorChanger() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id"));
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
    colorChanger();
    var timeChecker = setInterval(colorChanger, 15000);
    })
    