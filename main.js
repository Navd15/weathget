const {
    ipcMain,
    MenuItem,
    app,
    BrowserWindow,
    Tray,
    Menu
} = require('electron');

const fs=require('fs');
const os = require('os');

let win;
let tray;

function createWidget() {
    win = new BrowserWindow({
        skipTaskbar: false,
transparent:true,
        alwaysOnTop: false,
        hasShadow: true,
        movable:true,
        width: 500,
        height: 290,
        resizable: true,
        frame:false,

        webPreferences: {
            devTools: true
        }
    })
    
    createFolder();
    if(os.platform=='win32'){
    tra();
    }

    win.loadFile('./index.html')

}

function tra() {
    tray = new Tray('./res/img/tray.ico');
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