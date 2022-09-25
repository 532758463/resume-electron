import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

function createWindow() {
  // 更多参数：https://www.electronjs.org/zh/docs/latest/api/browser-window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // devTools: true,
    webPreferences: {
      nodeIntegration: true,
      // enableRemoteModule: true,
      contextIsolation: false
    }
  });
  win.on('show', () => {
    win.webContents.openDevTools();
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://127.0.0.1:7001/');
  } else {
    win.loadFile(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

ipcMain.on('win:click', () => {
  console.log('test');
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
