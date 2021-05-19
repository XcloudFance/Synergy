var ws =  new WebSocket("ws://localhost:1222/ws");
var canvas_ = document.querySelector('#mycanvas');
var cgc = canvas_.getContext('2d');
var cwidth = canvas_.width,
	cheight = canvas_.height;

ws.onopen = function() {
    //数据送达
    console.log("link successfully");
};
ws.onclose = function() {
    alert("You have already got lost with the server.");
};
ws.onmessage = function(evt) {
	/*
    var received_msg = evt.data;
    //console.log(received_msg);
    let canvas = document.querySelector('#mycanvas');
    let context = canvas.getContext('2d');
    let newimage = new Image();
    newimage.src = received_msg;
    newimage.addEventListener('load', () => {
        context.drawImage(newimage, 0, 0);
    });
	*/
   
   let rmsg  = evt.data;
   let newimage = new Image();
   newimage.src = rmsg;
   cgc.drawImage(newimage, 0, 0);
}

function sendmsg(content) {
    ws.send(content);
}