import path from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import isDev from 'electron-is-dev'

let mainWindow = null
const ROOT_PATH = app.getAppPath()

console.warn('ROOT_PATH:', ROOT_PATH)

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      webviewTag: true
    }
  })

  if (isDev) {
    mainWindow.loadURL(`http://127.0.0.1:6001`)
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
  }

  mainWindow.on('close', () => {
    mainWindow = null
  })
}

ipcMain.on('get-root-path', (event, arg: string) => {
  event.reply('reply-root-path', ROOT_PATH)
})

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
