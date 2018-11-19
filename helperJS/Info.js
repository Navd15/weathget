class fill {
    static makeHTML(result,cb) {
        
        /* The require  statement will not work outside the class so use it here*/
        let fs = require('fs');

        fs.readFile('./views/main.html', 'utf8', (err, data) => {

            let src=result.hourCond;

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
            data = data.toString();
    
            /* This code sinppet will convert data string to template literal */
    
            let s = eval('`' + data + '`');
            
            /* Callback sending data  */
cb(s);
        })
    
    }




}