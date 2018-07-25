const {app,BrowserWindow}= require('electron');
const electron =require('electron')
const fs=require('fs');
let win;

function createWidget(){
     console.log(electron.screen);
win=new BrowserWindow({skipTaskbar:false,alwaysOnTop:false,hasShadow:true,width:400,height:350,resizable:true,frame:true,webPreferences:{
    devTools:true
}})
win.loadFile('./index.html')

}


app.on('ready',createWidget)
