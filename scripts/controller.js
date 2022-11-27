function draw(){
    const canvas = document.querySelector('#drawingBoard');
    if(!canvas.getContext){
        return;
    }
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(300,300);
    ctx.stroke();

}
draw();