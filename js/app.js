import { changePenColor, clearCanvas, redo, undo } from "./canvasController.js";
const fabric = window.fabric;
let canvas = null;
const canvasObjectsList = [];
const isRedoing = false;

const initCanvas = () => {
  const fabricCanvas = new fabric.Canvas("mainCanvas", {
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "transparent",
    isDrawingMode: true,
    freeDrawingCursor: "url(./assets/pink.png) 10 50, auto",
    freeDrawingBrush: new fabric.PencilBrush(this),
  });

  canvas = fabricCanvas.getSelectionElement().parentNode;
  fabricCanvas.freeDrawingBrush.width = 5;
  if (canvas.requestFullScreen) {
    canvas.requestFullScreen();
  } else if (canvas.webkitRequestFullScreen) {
    canvas.webkitRequestFullScreen();
  } else if (canvas.mozRequestFullScreen) {
    canvas.mozRequestFullScreen();
  }
  return { canvas, fabricCanvas };
};
// can = fabricCanvas
export const addListeners = (can) => {
  window.addEventListener("keydown", (e) => {
    const keyName = e.key;
    if (keyName === "Escape" || keyName === "c") {
      clearCanvas(can);
    } else {
      can = changePenColor(keyName, can);
    }
    if (e.ctrlKey) {
      if (e.key === "z") {
        undo(can, canvasObjectsList);
      }
      if (e.key === "y") {
        redo(can, canvasObjectsList);
      }
    }
  });
};

export const init = () => {
  const { fabricCanvas } = initCanvas();
  addListeners(fabricCanvas);
};
