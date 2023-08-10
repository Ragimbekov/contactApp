module.exports = [
$(function(){
  $('#frmLogin input').on('keypress', function(event) {
    // Check if the pressed key is Enter (keyCode 13)
    if (event.key === 'Enter') {
      // Trigger a click event on the button element
      $('button').click();
    }
  });
                 
  $("button").click(function(){
    var username, pass;
    username=$("#frmLogin #username").val();
    pass=$("#frmLogin #pass").val();

    if(username==""){
      $("#username").addClass("border-2").addClass("border-solid").addClass("border-yellow-500").addClass("shadow-md").addClass("shadow-yellow-400");
      $("#message").html("Username must have not left empty").addClass("w-96")
      .addClass("p-4").addClass("bg-red-400").addClass("mb-5");
      $("#pass").removeClass();
    }else if(pass ==""){
      $("#pass").addClass("border-2").addClass("border-solid").addClass("border-yellow-500").addClass("shadow-md").addClass("shadow-yellow-400");
      $("#message").html("Password must have not left empty").addClass("w-96")
      .addClass("p-4").addClass("bg-red-400").addClass("mb-5");
      $("#username").removeClass();
      }else if(username !="Teymur"){
      $("#username").addClass("border-2").addClass("border-solid").addClass("border-red-500").addClass("shadow-md").addClass("shadow-yellow-400");
      $("#message").html("Username is wrong").addClass("w-96")
      .addClass("p-4").addClass("bg-red-400").addClass("mb-5");   
      $("#pass").removeClass();
      }else{
      $("#message").text("Logged in").removeClass();
      $("#message").addClass("w-96 p-4 bg-green-400 mb-5");
      $("#username").removeClass()
      $("#pass").removeClass()
      }
  });

})          

]