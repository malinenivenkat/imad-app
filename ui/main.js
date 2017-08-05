console.log('Loaded!');
// change the text of main text div
var element=document.getElementById('main.text');
elment.innerHTML='college management system-CSTAFF';
// move the image
var img=document.getElemeentById('modi');
var marginleft=0;
function moveRight(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
    
}
img.onclick=function()
{
    var interval=setInterval(moveRight,50);
    
};
