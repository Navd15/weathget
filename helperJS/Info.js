class fill {
    static makeHTML(result,cb) {
        
        /* The require  statement will not work outside the class so use it here*/
        let fs = require('fs');
        let p=require('path')
const dates={
"1":"Jan",
"2":"Feb",
"3":"Mar",
"4":"Apr",
"5":"May",
"6":"June",
"7":"July",
"8":"Aug",
"9":"Sep",
"10":"Oct",
"11":"Nov",
"12":"Dec"
}
       const path=p.join(__dirname,'/views','/main.html')
       console.log(result);
         
        fs.readFile(path, 'utf8', (err, data) => {
            let src=result.hourCond;
            const forecast=result.currentCond.forecast.forecastday
            let date=new Date();
            let d=`${date.toDateString().split(" ")[1]} ${date.getDate()},${date.getFullYear()}`;

            /*Generate  current weather object */

            let now = {
                condition:src.current.condition.text,
                name: src.location.name,
                temp:src.current.temp_c,
                date:d,
                rain:src.current.precip_in,
                wind_dir:src.current.wind_dir,
                wind:src.current.wind_kph,
                cloud:src.current.cloud
            };

        let makeDate=(str)=>{
const arr=str.split('-');
return `${arr[2]} ${dates[arr[1]]} ${arr[0]}`;
        }
const one={
date:makeDate(forecast[1].date),
rain:`${forecast[1].day['totalprecip_in']}`,
temp:`${forecast[1].day['mintemp_c']}`,
wind:`${forecast[1].day['maxwind_kph']}`,
text:`${forecast[1].day.condition['text']}`
}

const two={
    date:makeDate(forecast[2].date),
rain:`${forecast[2].day['totalprecip_in']}`,
temp:`${forecast[2].day['mintemp_c']}`,
wind:`${forecast[2].day['maxwind_kph']}`,
text:`${forecast[2].day.condition['text']}`
}

const three={   date:makeDate(forecast[3].date),
    rain:`${forecast[3].day['totalprecip_in']}`,
    temp:`${forecast[3].day['mintemp_c']}`,
    wind:`${forecast[3].day['maxwind_kph']}`,
    text:`${forecast[3].day.condition['text']}`}
            data = data.toString();
    
            /* This code sinppet will convert data string to template literal */
    
            let s = eval('`' + data + '`');
            
            /* Callback sending data  */
cb(s);
        })
    
    }




}