const {app,BrowserWindow}= require('electron');
const fs=require('fs');
let win;


function createWidget(){
    // console.log(screen);
win=new BrowserWindow({skipTaskbar:true,alwaysOnTop:false,hasShadow:true,width:400,height:300,resizable:true,frame:false,webPreferences:{
    devTools:false
}})
win.loadFile('./index.html')

}


app.on('ready',createWidget)
