/**
 * Created by Administrator on 2015/7/21.
 */
oCanvas.domReady(function(){
    //var canvas=oCanvas.create({
    //    canvas:"#canvas_test",
    //    background:"#eee"
    //});
    //var button_keep=canvas.display.rectangle({
    //        x:30,
    //        y:80,
    //        width:200,
    //        height:150,
    //        fill:"#000"
    //    }),
    //    button_clear=button_keep.clone({
    //        x:250
    //    });
    //canvas.addChild(button_keep);
    //canvas.addChild(button_clear);
    //button_keep.bind("click tap", function () {
    //    canvas.clear();
    //});
    //button_clear.dragAndDrop();
    //

    //ˮ�صĹ�������������
    var constructor = function (settings, core) {

        return oCanvas.extend({
            core: core,
            shapeType: "rectangular",

            init: function () {

            },
            advance: function () {
                if(this.height_now<this.height){
                    this.height_now+=1;
                }
                else{
                    this.height_now=0;
                }
            },
            draw: function () {
                var canvas = this.core.canvas,
                    origin = this.getOrigin(),
                    x = this.abs_x - origin.x,
                    y = this.abs_y - origin.y;

                canvas.beginPath();

                if (this.fill !== "") {
                    canvas.fillStyle = this.fill;
                    canvas.fillRect(x, y+this.height-this.height_now, this.width, this.height_now);
                }
                canvas.strokeStyle = this.strokeColor;
                canvas.lineWidth = this.strokeWidth;
                canvas.strokeRect(x,y,this.width,this.height);
                //
                //if (this.strokeWidth > 0) {
//                    canvas.strokeStyle = this.strokeColor;
//                    canvas.lineWidth = this.strokeWidth;
                //    canvas.strokeRect(x, y+this.height-this.height_now, this.width, this.height_now);
                //}
                canvas.stroke();
                canvas.closePath();
            }
        }, settings);
    };
//ˮ�صĹ��캯��
    oCanvas.registerDisplayObject("SC", constructor, "init");
//��������
    var canvas = oCanvas.create({
        canvas: "#canvas_HX",
        background: "#ccc",
        fps:1
    });
    var bg=canvas.display.image({
        x:0,
        y:0,
        image:"./image/HX.png"
    });
    canvas.addChild(bg);
//  var bg=canvas.display.image({
//      x:0,
//      y:0,
//      image:"../image/m00005.png"
//  });
//  canvas.addChild(bg);
    
    var HX_SC01 = canvas.display.SC({
        x: 140,
        y: 80,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC01);
    
    var HX_SC02 = canvas.display.SC({
        x: 280,
        y: 80,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC02);  
    var HX_SC03 = canvas.display.SC({
        x: 380,
        y: 80,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC03);
    var HX_SC04 = canvas.display.SC({
        x: 500,
        y: 80,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC04);
    
    var HX_SC05 = canvas.display.SC({
        x: 140,
        y: 500,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC05);
    
    var HX_SC06 = canvas.display.SC({
        x: 280,
        y: 500,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC06);
    
    var HX_SC07 = canvas.display.SC({
        x: 380,
        y: 500,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC07);
   
    var HX_SC08 = canvas.display.SC({
        x: 500,
        y: 500,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC08);
  
    var HX_SC09 = canvas.display.SC({
        x: 825,
        y: 80,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC09);
   
    var HX_SC10 = canvas.display.SC({
        x: 955,
        y: 80,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC10);
    
    var HX_SC11 = canvas.display.SC({
        x: 1085,
        y: 80,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC11);
 
    var HX_SC12 = canvas.display.SC({
        x: 825,
        y: 500,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC12);
   
    var HX_SC13 = canvas.display.SC({
        x: 955,
        y: 500,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC13);
   
    var HX_SC14 = canvas.display.SC({
        x: 1085,
        y: 500,
        width: 20,
        height: 100,
        height_now:0,
        fill: "#43d9f9",
        stroke: "1px #eef5fd"
    });
    canvas.addChild(HX_SC14);
    var flag = 1;
    var step = 5;
//    $("#btn_start").toggle(
//        function () {
//            flag = 0;
//            },
//        function() {
//            flag = 1;
//        });
    $("button#btn_start").click(function(){
        if(flag==1){
            flag=0;{
                $(this).text("��ʼ��ʾ");}
        }

        else{
            flag=1;
            $(this).text("��ͣ��ʾ");}
    });
    $("#btn_fast").click(function(){
        step += 5;
    });
    $("#btn_slow").click(function(){
        step -= 5;
    });
    $("#btn_zero").click(function(){
        step = 5;
    });
    $("#btn_reset").click(function(){
        t=0
        flag=0;
        step = 5;
        $("#btn_start").text("��ʼ��ʾ");
        document.cookie="time=0";
    });
    $("#btn_last").click(function(){
        window.location.assign("./GN_JJ.html");
    });
    $("#btn_next").click(function(){
        window.location.assign("./GN_VL.html");
    });
    var strCookie =document.cookie;
    //����cookie�и�Ϊ�����/ֵ��
    var arrCookie=strCookie.split(";");
    var t;
    //����cookie���飬����ÿ��cookie��
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        //�ҵ����Ϊtime��cookie�����������ֵ
        if("time"==arr[0]){
            t = parseFloat(arr[1]);
            break;
        }
    }
    canvas.setLoop(function () {
//      var testCookie =document.cookie;
//      document.getElementById("test1").innerHTML="cookies:"+testCookie;
      document.getElementById("SimTime").innerHTML="仿真时间: "+t+"秒  "+"step:"+step+"秒";
      //Y0A
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC01",t:t},function(Onload){
//  	alert(data);
      HX_SC01.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC01_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC01.fill="#0767c8";
      }
      else{
          HX_SC01.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC01",t:t},function(VNow) {
      document.getElementById("readout_HX_SC01_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC02",t:t},function(Onload){
//  	alert(data);
      HX_SC02.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC02_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC02.fill="#0767c8";
      }
      else{
          HX_SC02.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC02",t:t},function(VNow) {
      document.getElementById("readout_HX_SC02_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC03",t:t},function(Onload){
//  	alert(data);
      HX_SC03.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC03_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC03.fill="#0767c8";
      }
      else{
          HX_SC03.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC03",t:t},function(VNow) {
      document.getElementById("readout_HX_SC03_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC04",t:t},function(Onload){
//  	alert(data);
      HX_SC04.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC04_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC04.fill="#0767c8";
      }
      else{
          HX_SC04.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC04",t:t},function(VNow) {
      document.getElementById("readout_HX_SC04_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC05",t:t},function(Onload){
//  	alert(data);
      HX_SC05.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC05_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC05.fill="#0767c8";
      }
      else{
          HX_SC05.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC05",t:t},function(VNow) {
      document.getElementById("readout_HX_SC05_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC06",t:t},function(Onload){
//  	alert(data);
      HX_SC06.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC06_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC06.fill="#0767c8";
      }
      else{
          HX_SC06.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC06",t:t},function(VNow) {
      document.getElementById("readout_HX_SC06_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC07",t:t},function(Onload){
//  	alert(data);
      HX_SC07.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC07_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC07.fill="#0767c8";
      }
      else{
          HX_SC07.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC07",t:t},function(VNow) {
      document.getElementById("readout_HX_SC07_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC08",t:t},function(Onload){
//  	alert(data);
      HX_SC08.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC08_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC08.fill="#0767c8";
      }
      else{
          HX_SC08.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC08",t:t},function(VNow) {
      document.getElementById("readout_HX_SC08_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC09",t:t},function(Onload){
//  	alert(data);
      HX_SC09.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC09_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC09.fill="#0767c8";
      }
      else{
          HX_SC09.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC09",t:t},function(VNow) {
      document.getElementById("readout_HX_SC09_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC10",t:t},function(Onload){
//  	alert(data);
      HX_SC10.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC10_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC10.fill="#0767c8";
      }
      else{
          HX_SC10.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC10",t:t},function(VNow) {
      document.getElementById("readout_HX_SC10_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC11",t:t},function(Onload){
//  	alert(data);
      HX_SC11.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC11_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC11.fill="#0767c8";
      }
      else{
          HX_SC11.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC11",t:t},function(VNow) {
      document.getElementById("readout_HX_SC11_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC12",t:t},function(Onload){
//  	alert(data);
      HX_SC12.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC12_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC12.fill="#0767c8";
      }
      else{
          HX_SC12.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC12",t:t},function(VNow) {
      document.getElementById("readout_HX_SC12_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC13",t:t},function(Onload){
//  	alert(data);
      HX_SC13.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC13_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC13.fill="#0767c8";
      }
      else{
          HX_SC13.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC13",t:t},function(VNow) {
      document.getElementById("readout_HX_SC13_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  $.post("./updatePoolOnload.jsp",{id:"MTG_HX_SC14",t:t},function(Onload){
//  	alert(data);
      HX_SC14.height_now=parseFloat(Onload);
      document.getElementById("readout_HX_SC14_Onload").innerHTML="负载："+Onload+"%";
      if(Onload>85){
          HX_SC14.fill="#0767c8";
      }
      else{
          HX_SC14.fill="#43d9f9";
      }
  });
  $.post("./updatePoolVNow.jsp",{id:"MTG_HX_SC14",t:t},function(VNow) {
      document.getElementById("readout_HX_SC14_Vnow").innerHTML = "水量：" +VNow+"立方米";
  });
  if(flag==1){
      t+=step;
  }
  else{
      t+=0;
  }
  var writeCookie="time="+t;
  document.cookie=writeCookie;
  canvas.redraw();
}).start();
});