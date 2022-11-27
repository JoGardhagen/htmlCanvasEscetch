// function draw(){
    const canvas = document.querySelector('#drawingBoard');
    const {width, height } = canvas;
    
    // if(!canvas.getContext){
    //     return;
    // }
    const ctx = canvas.getContext('2d');

    canvas.background = 'white';

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    let moveAmount = 2;

    let lastX = 0;
    let lastY = 0;

// }
document.addEventListener("keydown",function(event){
    console.log(event.witch);
    if(event.keyCode === 37){
        lastX -=moveAmount;
    }
    else if(event.keyCode === 38){
        lastY -=moveAmount;
    }
    else if(event.keyCode === 39){
        lastX +=moveAmount;
    }
    else if(event.keyCode === 40){
        lastY +=moveAmount;
    }
    else if(event.keyCode === 21){
        ctx.clear(0,0, canvas.width,canvas.height);
    }

    console.log(lastX,lastY)
    event.preventDefault();

    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.fillRect(lastX,lastY,moveAmount,moveAmount);
});