$(document).ready(function() {
// your javascript and jQuery code goes below
$("#pink").click(function(){
  $(".container").css('border', "solid 20px pink");
});
$("#blue").click(function(){
  $(".container").css('background-color', "blue");
});
$("#fade").click(function(){
  $(".container").fadeOut("slow");
});
$("#lottery").click(function(){
  alert("YOU WON THE LOTTERY!");
});
$("#confirm").click(function(){
  confirm("Are you sure?");
});
$("#puppy").click(function(){
  $("body").css('background-image', "url('https://cdn.pixabay.com/photo/2015/02/05/12/09/chihuahua-624924_960_720.jpg')");
});
$("#replace").click(function(){
  $(this).replaceWith("<div><center><h2>REPLACED!</h2></center></div>");
});
$("#drive").click(function(){
  var age = prompt("How old are you?");
  if(age >= 16){
    $(".container").replaceWith("<center><h1>You're old enough to drive!</h1></center>");
  }else{
    $(".container").replaceWith("<center><h1>You're not old enough to drive.</h1></center>");
  }
  });
  $("#choose").click(function(){
    $(this).replaceWith("<div><center><h2>REPLACED!</h2></center></div>");
  });
})
