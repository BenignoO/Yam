/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
  $(".p1").hover(function(){
      arriba =  Math.random() * (400 - 1) + 1;
      abajo =  Math.random() * (609 - 1) + 1;
    $(this).css("top", arriba);
    $(this).css("left", abajo);
    });
});
function dijoSi(){
    //document.getElementById("si").style.display = "block";
    setTimeout( function() { window.location.href = "index_1.html"; }, 500 );
}

