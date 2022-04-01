import { changePenColor } from './penController.js';
const fabric  = window.fabric;
let canvas = null;

const initCanvas = () => {
    const fabricCanvas = new fabric.Canvas("mainCanvas", {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "white",
        isDrawingMode: true,
        freeDrawingCursor: 'url(./assets/pink.png) 10 50, auto',
        freeDrawingBrush: new fabric.PencilBrush(this),
      });

    canvas = fabricCanvas.getSelectionElement().parentNode;
    fabricCanvas.freeDrawingBrush.width = 5;
    if(canvas.requestFullScreen) {
        canvas.requestFullScreen();
    }
    else if(canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    }
    else if(canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    }
    return { canvas, fabricCanvas }
}

export const addListeners = (can) => {
    window.addEventListener('keydown', (e) => {
        const keyName = e.key;
        can = changePenColor(keyName, can);
    });
}

export const init = () => {
    const { fabricCanvas } = initCanvas();
    addListeners(fabricCanvas);
}