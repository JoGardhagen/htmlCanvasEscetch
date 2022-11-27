// function draw(){
    const canvas = document.querySelector('#drawingBoard');
    const {width, height } = canvas;
    
    // if(!canvas.getContext){
    //     return;
    // }
    const ctx = canvas.getContext('2d');

    canvas.background = 'white';

    // ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;

    let moveAmount = 2;

    let lastX = 0;
    let lastY = 0;

// }
document.addEventListener("keydown",function(event){
    console.log(event.witch);
    if(event.key === "ArrowLeft"){
        lastX -=moveAmount;
    }
    else if(event.key === "ArrowUp"){
        lastY -=moveAmount;
    }
    else if(event.key === "ArrowRight"){
        lastX +=moveAmount;
    }
    else if(event.key === "ArrowDown"){
        lastY +=moveAmount;
    }
    

    console.log(lastX,lastY)
    event.preventDefault();

    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.fillRect(lastX,lastY,moveAmount,moveAmount);
});
document.addEventListener("keyup",function(event){
    if(event.key === "c"){
        ctx.clearRect(0,0, canvas.width,canvas.height);
    }
});