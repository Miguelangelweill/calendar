
//Here i create my variables
var m = moment();
//THIS IS WHAT DISPLAYES THE DATE AND TIME ON MY HTML
$('span').text(m.format("L"));
//NOW WE WILL TRY TO MAKE A FUNCTION FOR ALL OF THE DIFFERENT CONTAINERS ON THE CALENDAR

$('#save').click(function(event){
    var inputValue = $('input').val();
    alert(inputValue);
});
 
