'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;
app.on("ready", () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 1067
    });
    mainWindow.loadURL("file://"+__dirname+"/../browser/ui/index.html");
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});