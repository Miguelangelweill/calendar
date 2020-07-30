$(document).ready(function () {
  //HERE I WILL CREATE MY TIME TO BE DISPLAYED
  var update = function () {
    document.getElementById("datetime").innerHTML = moment().format(
      "MMMM Do YYYY, h:mm a"
    );
  };
  update()
  setInterval(update, 1000);
 
  var library = {};
 //here i check if there is exsisting values inside of the local storage when the page first loads
  if (localStorage.getItem("library")) {
    var localTodo = JSON.parse(localStorage.getItem("library"));
    $("#9am").val(localTodo["9am"]);
    $("#10am").val(localTodo["10am"]);
    $("#11am").val(localTodo["11am"]);
    $("#12pm").val(localTodo["12pm"]);
    $("#1pm").val(localTodo["1pm"]);
    $("#2pm").val(localTodo["2pm"]);
    $("#3pm").val(localTodo["3pm"]);
    $("#4pm").val(localTodo["4pm"]);
    $("#5pm").val(localTodo["5pm"]);
  }

  $(".save").click(function (event) {
    //HERE WE WANT TO GET THE INFORMATION FROM MY INPUT ELEMENT AND SE IT INTO MY LIBRARY
    if ($(this).prev().val()) {
      event.preventDefault();
      var timeToDo = $(this).prev().val();
      var newTime = $(this).prev().attr("id");
      library[newTime] = timeToDo;
      $(this).text("saved");
      

      $(this).prev().animate({
              height: "toggle",
      }).delay(100).animate({
        height: "toggle",
      });

      //here we are saving our new current library inside of the library
    }
    library = {
      "9am": $("#9am").val(),
      "10am": $("#10am").val(),
      "11am": $("#11am").val(),
      "12pm": $("#12pm").val(),
      "1pm": $("#1pm").val(),
      "2pm": $("#2pm").val(),
      "3pm": $("#3pm").val(),
      "4pm": $("#4pm").val(),
      "5pm": $("#5pm").val(),
    };
    var myValues = JSON.stringify(library);
    localStorage.setItem("library", myValues);
  });

  //here i am getting the individual values back from local storage

  //this is how i display the values in the local storage after the page is being refreshed

  //if the value inside of the function exsist run it else nothing
  function timeColor(){
  var timeTimer = parseInt(moment().format("H"));

  if (timeTimer > 9) {
    $(".event1").addClass("past");
  } else if (timeTimer < 9) {
    $(".event1").addClass("future");
  } else if (timeTimer == 9) {
    $(".event1").addClass("current");
  } else {
  }

  if (timeTimer > 10) {
    $(".event2").addClass("past");
  } else if (timeTimer < 10) {
    $(".event2").addClass("future");
  } else if (timeTimer == 10) {
    $(".event2").addClass("current");
  } else {
  }

  if (timeTimer > 11) {
    $(".event3").addClass("past");
  } else if (timeTimer < 11) {
    $(".event3").addClass("future");
  } else if (timeTimer == 11) {
    $(".event3").addClass("current");
  } else {
  }

  if (timeTimer > 12) {
    $(".event4").addClass("past");
  } else if (timeTimer < 12) {
    $(".event4").addClass("future");
  } else if (timeTimer == 12) {
    $(".event4").addClass("current");
  } else {
  }

  if (timeTimer > 13) {
    $(".event5").addClass("past");
  } else if (timeTimer < 13) {
    $(".event5").addClass("future");
  } else if (timeTimer == 13) {
    $(".event5").addClass("current");
  } else {
  }

  if (timeTimer > 14) {
    $(".event6").addClass("past");
  } else if (timeTimer < 14) {
    $(".event6").addClass("future");
  } else if (timeTimer == 14) {
    $(".event6").addClass("current");
  } else {
  }

  if (timeTimer > 15) {
    $(".event7").addClass("past");
  } else if (timeTimer < 15) {
    $(".event7").addClass("future");
  } else if (timeTimer == 15) {
    $(".event7").addClass("current");
  } else {
  }

  if (timeTimer > 16) {
    $(".event8").addClass("past");
  } else if (timeTimer < 16) {
    $(".event8").addClass("future");
  } else if (timeTimer == 16) {
    $(".event8").addClass("current");
  } else {
  }

  if (timeTimer > 17) {
    $(".event9").addClass("past");
  } else if (timeTimer < 17) {
    $(".event9").addClass("future");
  } else if (timeTimer == 17) {
    $(".event9").addClass("current");
  } else {
  }
}
setInterval(timeColor,1800000*2)
  //Delete button$
  $(".delete").click(function(){
    localStorage.clear()
    $('.input').val('')
  })
});

//NEED TO LINK THE TIME OF MY TODO'S TO THE CLOCK SO IF THE TIME HAS PASSED IT WONT ALLOW FOR IT TO BE TYPED IN OR EDITED
// IF POSSIBLE MAKE A LOOP OR A FUNCTION THAT EVERYTIME I RUN IT IT CRAETES A NEW BLOCK OF INPUT , AND HAVE A COUNTER THAT EVERYTIME THE LOOP RUNS IT SHOULD ADD ONE VALUE TO THE CURRENT TIME DISPLAYED (BUT HOW WOULD I DO IT FROM 12-12 AND NOT THE WHOLE 24 HOUR SITUATION?)
