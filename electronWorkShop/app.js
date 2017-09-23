/**
 * Created by Darina on 23.09.2017.
 * electron intro task #1
 */

var electron = require('electron');

electron.app.on('ready', ()=>{var mainWindow = new electron.BrowserWindow({width:600, height:800}); mainWindow.loadURL('file://'+__dirname+'/index.html')});
