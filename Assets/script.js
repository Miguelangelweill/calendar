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
    "5pm": $("#5pm").val()
  };

  
  $("button").click(function (event) {
    //HERE WE WANT TO GET THE INFORMATION FROM MY INPUT ELEMENT AND SE IT INTO MY LIBRARY
    if ($(this).prev().val()) {
      //this gives me the id of the element that was clicked
      var timeToDo = $(this).prev().val();
      var newTime = $(this).prev().attr('id')
      library[newTime]=timeToDo;
      

    }
    //here we are saving our new current library inside of the library
    localStorage.setItem("library",JSON.stringify(library));
  });
  //here i obvously get all of the items that were pushed into my library so how can i identify them by their id ?
  
//HERE I CONTROL THE BACKGROUND COLORS DEPENDING ON THE TIME OF THE DAY
  var nineish = localStorage.getItem('library');
  var nineAm = nineish["9am"];
  console.log(nineAm);



});


//NEED TO LINK THE TIME OF MY TODO'S TO THE CLOCK SO IF THE TIME HAS PASSED IT WONT ALLOW FOR IT TO BE TYPED IN OR EDITED
// IF POSSIBLE MAKE A LOOP OR A FUNCTION THAT EVERYTIME I RUN IT IT CRAETES A NEW BLOCK OF INPUT , AND HAVE A COUNTER THAT EVERYTIME THE LOOP RUNS IT SHOULD ADD ONE VALUE TO THE CURRENT TIME DISPLAYED (BUT HOW WOULD I DO IT FROM 12-12 AND NOT THE WHOLE 24 HOUR SITUATION?)
