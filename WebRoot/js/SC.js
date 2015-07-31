/**
 * Created with JetBrains WebStorm.
 * User: YYbupt
 * Date: 15-6-22
 * Time: 上午9:00
 * To change this template use File | Settings | File Templates.
 */

var canvas = document.getElementById("canvas_QS");
var context = canvas.getContext("2d");
var pic_QS = new Image();
pic_QS.addEventListener('load', drawImg, false);
pic_QS.src = "image/QuShuiFang.jpg";
function drawImg() {
    context.drawImage(pic_QS, 0, 0, 1280, 753);
}
var btn_start = document.getElementById("btn_start");
btn_start.addEventListener('click', f_startQS, false);
function f_startQS() {
    var SC_height = 0, SC_width = 210, Speed = 0.5;
    context.strokeStyle = "#002800";
    context.lineWidth = 1;
    flash();
    function flash() {
        var canvas = document.getElementById("canvas_QS"),
            read1 = document.getElementById("readout_SC1"),
            read2 = document.getElementById("readout_SC2"),
            context = canvas.getContext("2d");
        context.fillStyle = "#05CBFC";
        SC_height = SC_height + Speed;
        var pos = 463- SC_height;
        var h = parseFloat(SC_height / 40.0).toFixed(1)
        read1.innerHTML = "高度:" + h + "m";
        read2.innerHTML = "高度:" + h + "m";
        context.fillRect(278, pos, SC_width, SC_height);
        context.fillRect(278, pos + 234, SC_width, SC_height);

        if (SC_height < 190) {
            window.requestAnimationFrame(flash);
        }
        else if (SC_height < 225) {
            context.fillStyle = "#0076FF";
            if (SC_height % 2 == 0) {
                context.fillRect(278, pos, SC_width, SC_height);
                context.fillRect(278, pos + 234, SC_width, SC_height);
            }
            window.requestAnimationFrame(flash);
        }
        else {
            context.fillStyle = "#0076FF";
            context.fillRect(278, pos, SC_width, SC_height);
            context.fillRect(278, pos + 234, SC_width, SC_height);
        }
    }
}






