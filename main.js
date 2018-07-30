const {ipcMain,MenuItem,app,BrowserWindow,Tray,Menu}= require('electron');


let win;
let tray;


function tra(){
    tray=new Tray('./res/img/tray.ico');
    const cmenu=Menu.buildFromTemplate([
{label:'About',type:'normal'},
{label:'Settings',type:'normal'}
    ]);
    tray.setContextMenu(cmenu);
    tray.setToolTip('More');
}


function createWidget(){
win=new BrowserWindow({skipTaskbar:false,alwaysOnTop:false,hasShadow:true,width:400,height:350,resizable:true,frame:true,webPreferences:{
    devTools:true
}})
tra();
win.loadFile('./index.html')

}


app.on('ready',createWidget)

