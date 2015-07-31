/**
 * Created with JetBrains WebStorm.
 * User: YYbupt
 * Date: 15-6-28
 * Time: 下午8:20
 * To change this template use File | Settings | File Templates.
 */
//$(".start_play").click(function(){
//    $.ajax({url:"getWater.html",success:function(result){
//        $(".myContent").html(result);
//    }});
//});
//$(".start_play").click(function(){
//     $(".myContent").html="getWater.html";
//});
//var StartPlay = document.getElementById("startPlay");
//StartPlay.onclick =function () {
//    document.getElementById("myQuShui").style.display = "inline";
//    document.getElementById("StartPlay").style.display="none";
    //frame框架方法
//    document.getElementById("myContent").innerHTML="<iframe src='getWater.html' width='1100px' height='500px' style=''></iframe>";
    //load方法
//    $("#myContent").load("getWater.html");
//    $("#myContent").load("mainView.html");
//}
$(document).ready(function () {
    $("#myContent").load("main.html");
});

function f_mainView(){
    $("#myContent").load("main.html");
}
function f_getWater() {
    //$("#myContent").load("getWater.html");
    $("#myContent").load("getWater.html");
}
function open_getWater(){
    window.open("getWater1.html");
}