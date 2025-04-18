const canvas = document.getElementById('canvaselement');
const ctx = canvas.getContext('2d');
const mouse = {x:-5,y:-5,down:false};
canvas.width = 500;
canvas.height = 500;
canvas.addEventListener("mousemove",(m)=>{
  mouse.x = m.offsetX;
  mouse.y = m.offsetY;
});
canvas.addEventListener("mousedown",()=>{
  mouse.down = true;
});
canvas.addEventListener("mouseup",()=>{
  mouse.down = false;
});
canvas.addEventListener("mouseleave",()=>{
  mouse.down = false;
});
ctx.fillStyle = document.getElementById("color2").value;
ctx.fillRect(0,0,canvas.width,canvas.height);
function enablecanvas(){
  if (mouse.down){
    let tn = document.getElementById("pct").value;
    ctx.fillStyle = document.getElementById("color").value;
    if (document.getElementById("mode").value === "p"){
      ctx.fillRect(mouse.x,mouse.y,tn,tn);
    }else{
      ctx.clearRect(mouse.x,mouse.y,tn,tn);
    }
  }
  requestAnimationFrame(enablecanvas);
}
function clearr(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}
function defs(){
  document.getElementById("pct").value = 5;
  document.getElementById("color").value = "rgba(0,0,0,0)";
  document.getElementById("mode").value = "p";
}
function fill(){
  ctx.fillStyle = document.getElementById("color2").value;
  ctx.fillRect(0,0,canvas.width,canvas.height);
}
let a = document.createElement("a");
function downloadc(){
   a.setAttribute("href",canvas.toDataURL("image/png"));
   a.download = document.title.replace(/\s+/g, '')+".png";
  a.click();
}
function titled(){
  document.title = document.getElementById("ttt").value;
}
enablecanvas();
