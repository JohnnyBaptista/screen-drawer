export const changePenColor = (color, canvas) => {
    switch (color) {
        case 'r':
            canvas.freeDrawingBrush.color = '#e84d4d';
            canvas.freeDrawingCursor = 'url(./assets/red.png) 10 50, auto';
            break;
        case 'g':
            canvas.freeDrawingBrush.color = '#7df279';
            canvas.freeDrawingCursor = 'url(./assets/lime.png) 10 50, auto';
            break;
        case 'b':
            canvas.freeDrawingBrush.color = '#6c73f5';
            canvas.freeDrawingCursor = 'url(./assets/blue.png) 10 50, auto';
            break;
        case 'd':
            canvas.freeDrawingBrush.color = 'black';
            canvas.freeDrawingCursor = 'url(./assets/pink.png) 10 50, auto';
            break;
        default:
            break;
        }
    return canvas;
}

export const clearCanvas = (canvas) => canvas.clear();