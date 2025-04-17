const canvas = document.getElementById('canvaselement');
const ctx = canvas.getContext('2d');
const mouse = {x:0,y:0,down:false};
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
function enablecanvas(){
  if (mouse.down){
    ctx.fillRect(mouse.x,mouse.y,5,2.5);
  }
  requestAnimationFrame(enablecanvas);
}
enablecanvas();
