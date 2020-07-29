$(document).ready(function () {
  //HERE I WILL CREATE MY TIME TO BE DISPLAYED
  var update = function () {
    document.getElementById("datetime").innerHTML = moment().format(
      "MMMM Do YYYY, h:mm a"
    );
  };
  setInterval(update, 1000);
  //HERE I AM ABLE TO STORE THE INDIVIDUAL VALUES OF THE INPUTS TARGETTING THEM BY THEIR ID

  var library = {
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

  $(".save").click(function (event) {
    event.preventDefault();
    //HERE WE WANT TO GET THE INFORMATION FROM MY INPUT ELEMENT AND SE IT INTO MY LIBRARY
    if ($(this).prev().val()) {
      //this will give us the value of the previous element before the button which is the input
      var timeToDo = $(this).prev().val();
      //this gives me the id of the element in the previous position from the button
      var newTime = $(this).prev().attr("id");
      library[newTime] = timeToDo;
      //when you click the button to save this changes the text in the button from save to saved 
      $(this).text("saved");
      //this is what gives the effect when we save our item
      $(this).prev().animate({
        height: "toggle",
      });
    }

    //here we are saving our new current library inside of the library
    localStorage.setItem("library", JSON.stringify(library));
  });
  //here i am getting the individual values back from local storage 
  var localTodo = JSON.parse(localStorage.getItem("library"));
  var nineAm = localTodo['9am'];
  localTodo = JSON.parse(localStorage.getItem("library"));
  var tenAm = localTodo['10am'];
  localTodo = JSON.parse(localStorage.getItem("library"));
  var ellevenAm = localTodo['11am'];
  localTodo = JSON.parse(localStorage.getItem("library"));
  var twelvePm = localTodo['12pm'];
  localTodo = JSON.parse(localStorage.getItem("library"));
  var onePm = localTodo['1pm'];
  localTodo = JSON.parse(localStorage.getItem("library"));
  var twoPm = localTodo['2pm'];
  localTodo = JSON.parse(localStorage.getItem("library"));
  var threePm = localTodo['3pm'];
  localTodo = JSON.parse(localStorage.getItem("library"));
  var fourPm = localTodo['4pm'];
  localTodo = JSON.parse(localStorage.getItem("library"));
  var fivePm = localTodo['5pm'];
  //this is how i display the values in the local storage after the page is being refreshed
    $("#9am").val(nineAm);
    $("#10am").val(tenAm);
    $("#11am").val(ellevenAm);
    $("#12pm").val(twelvePm);
    $("#1pm").val(onePm);
    $("#2pm").val(twoPm);
    $("#3pm").val(threePm);
    $("#4pm").val(fourPm);
    $("#5pm").val(fivePm);
    
  //if the value inside of the function exsist run it else nothing
  var timeTimer =parseInt( moment().format("H"));
   
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
  

 //Delete button$

});

//NEED TO LINK THE TIME OF MY TODO'S TO THE CLOCK SO IF THE TIME HAS PASSED IT WONT ALLOW FOR IT TO BE TYPED IN OR EDITED
// IF POSSIBLE MAKE A LOOP OR A FUNCTION THAT EVERYTIME I RUN IT IT CRAETES A NEW BLOCK OF INPUT , AND HAVE A COUNTER THAT EVERYTIME THE LOOP RUNS IT SHOULD ADD ONE VALUE TO THE CURRENT TIME DISPLAYED (BUT HOW WOULD I DO IT FROM 12-12 AND NOT THE WHOLE 24 HOUR SITUATION?)
