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
  const ROOT_PATH = path.join(app.getAppPath(), '../');

  win.on('show', () => {
    win.webContents.openDevTools();
  });

  // 👇 监听渲染进程发的消息并回复
  ipcMain.on('get-root-path', (event, arg) => {
    event.reply('reply-root-path', ROOT_PATH);
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://127.0.0.1:7001/');
  } else {
    win.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
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
