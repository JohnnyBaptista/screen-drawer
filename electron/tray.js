const { Tray, Menu, app } = require('electron');
const { resolve } = require('path');

const createTrayMenu = (tray) => {
    const trayMenu = Menu.buildFromTemplate([
        {
            label: 'Exit',
            click: () => {
                app.isQuiting = true;
                app.quit();
            }
        }
    ]);
    tray.setContextMenu(trayMenu);
    tray.on('right-click', () => {
    tray.popUpContextMenu();
    })
    tray.setToolTip('Screen-drawer');
}

function createTray() {
    const iconPath = resolve(__dirname, '../', 'assets', 'pink.png');
    const tray = new Tray(iconPath);
    createTrayMenu(tray);
    return tray;
}

module.exports = createTray();