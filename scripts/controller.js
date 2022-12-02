
    const canvas = document.querySelector('#drawingBoard');
    const {width, height } = canvas;
    

    const ctx = canvas.getContext('2d');
    canvas.background = 'white';
    ctx.lineWidth = 2;

    let moveAmount = 2;
    let lastX = 0;
    let lastY = 0;

    const rotateLeft =[
        { transform:'rotate(-30deg)' }
    ];
    const rotateRight =[
        { transform:'rotate(30deg)' }
    ];
    const rotateTime ={
        duration: 200,
        iterations:1
    }
    const leftRegulator = document.querySelector('#Left');
    const rightRegulator = document.querySelector('#Right');

document.addEventListener("keydown",function(event){
    console.log(event.witch);
    if(event.key === "ArrowLeft"){
        lastX -=moveAmount;
        leftRegulator.animate(rotateLeft,rotateTime);
    }
    else if(event.key === "ArrowUp"){
        lastY -=moveAmount;
        rightRegulator.animate(rotateLeft,rotateTime);
    }
    else if(event.key === "ArrowRight"){
        lastX +=moveAmount;
        leftRegulator.animate(rotateRight,rotateTime);
    }
    else if(event.key === "ArrowDown"){
        lastY +=moveAmount;
        rightRegulator.animate(rotateRight,rotateTime);
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
    else if(event.key===" "){
        ctx.clearRect(0,0, canvas.width,canvas.height);
    }
});
regulator.addEventListener('', ()=>{
    regulator.animate(rotateReg,rotateTime);
});