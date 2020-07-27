$(document).ready(function () {
  //HERE I WILL CREATE MY TIME TO BE DISPLAYED
  var update = function () {
    document.getElementById("datetime").innerHTML = moment().format(
      "MMMM Do YYYY, h:mm a"
    );
  };
  setInterval(update, 1000);
  //HERE WE CREATE A LIBRARY FOR THE INPUT INFORMATION

  //THERE MUST BE A WAY TO MAKE AN OBJECT WITH ALL OF THE TIMES AND PUSH THE VALUE OF THIS ELEMENT THAT WAS CLICKED Matching it with the id 
  var library = [

  ];

  $("button").click(function (event) {
    //HERE WE WANT TO GET THE INFORMATION FROM MY INPUT ELEMENT AND SE IT INTO MY LIBRARY
        if ($(this).prev().val()) {
      var toDo = $(this).prev().val();
      library.push(toDo);
      console.log(library);
    }
    //ASK IF THERE IS A WAY TO MATCH THE ID OF THIS ELEMENT THAT HAS BEEN CLICKED 

    //HERE WE WANT TO SAVE INTO THE LOCAL STORAGE THE NEW VALUE OF LIBRARY AFTER EVERY PUSH
    localStorage.setItem("the to do:", library);
    var getToDo =localStorage.getItem('the to do;');
    $('input').text(getToDo);
  });
  //here i obvously get all of the items that were pushed into my library so how can i identify them by their id ?
  $('#9am').val(localStorage.getItem("the to do:"))

});


