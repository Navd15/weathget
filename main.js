const {
    ipcMain,
    MenuItem,
    app,
    BrowserWindow,
    Tray,
    Menu
} = require('electron');

const path=require('path');
const fs=require('fs');
const os = require('os');

let win;
let tray;

function createWidget() {
    win = new BrowserWindow({
        skipTaskbar: false,
        transparent:true,
        frame:false,
        alwaysOnTop: false,
        backgroundColor:'#000000',
        movable:true,
        width: 500,
        height: 290,
        webPreferences: {
            devTools: true
        }
    })
    // createFolder();
    if(os.platform=='win32'){
    tra();
    }
// // indexedDB.open('')
// win.webContents.send()
win.loadFile('./index.html');

}

/* Only for windows */
function tra() {
    const rah=path.join(__dirname,'res/img/tray.ico');  //Path to tray icon
    tray = new Tray(rah);
    const cmenu = Menu.buildFromTemplate([{
            label: 'About',
            type: 'normal'
        },
        {
            label: 'Settings',
            type: 'normal'
        }
    ]);

    tray.setContextMenu(cmenu);
    tray.setToolTip('More');
}


function createFolder(){
let homePath=os.homedir();
homePath=homePath+`/widget$User`;
fs.mkdir(`${homePath}`,(err,dir)=>{
    if(err==null){
let data=Buffer.from('dsfde','binary'); 

fs.writeFile(`${homePath}/fs.bau`,data,(err,file)=>{
    console.log(file);
    
})
    }
})

}

app.on('ready', createWidget)