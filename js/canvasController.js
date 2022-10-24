const changePenColor = (color, canvas) => {
  switch (color) {
    case "r":
      canvas.freeDrawingBrush.color = "#e84d4d";
      canvas.freeDrawingCursor = "url(./assets/red.png) 10 50, auto";
      break;
    case "g":
      canvas.freeDrawingBrush.color = "#7df279";
      canvas.freeDrawingCursor = "url(./assets/lime.png) 10 50, auto";
      break;
    case "b":
      canvas.freeDrawingBrush.color = "#3f42fc";
      canvas.freeDrawingCursor = "url(./assets/blue.png) 10 50, auto";
      break;
    case "d":
      canvas.freeDrawingBrush.color = "#000000";
      canvas.freeDrawingCursor = "url(./assets/pink.png) 10 50, auto";
      break;
    case "y":
      canvas.freeDrawingBrush.color = "#ded600";
      canvas.freeDrawingCursor = "url(./assets/yellow.png) 10 50, auto";
      break;
    case "p":
      canvas.freeDrawingBrush.color = "#fc03fc";
      canvas.freeDrawingCursor = "url(./assets/pink.png) 10 50, auto";
      break;
    default:
      break;
  }
  return canvas;
};

const clearCanvas = (canvas) => canvas.clear();

const undo = (canvas, canvasObjectsList) => {
  if (canvas._objects.length > 0) {
    canvasObjectsList.push(canvas._objects.pop());
    canvas.renderAll();
  }
};

const redo = (canvas, canvasObjectsList, isRedoing) => {
  if (canvasObjectsList.length > 0) {
    canvas.add(canvasObjectsList.pop());
  }
};


export { changePenColor, clearCanvas, undo, redo };