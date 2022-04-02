const { app, Menu } = require('electron');

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

function App() {
    require('./registerShortcuts.js');
    const win = require('./createWindow.js');
    const tray = require('./tray.js');
    createTrayMenu(tray);
}

app.whenReady().then(() => {
    
}).then(App);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})
