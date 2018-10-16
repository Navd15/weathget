/* Helper class for SW registration */

class SWRegistration {

    constructor(container) {
this._container=container;
    }

    register_sw() {
        if (navigator.serviceWorker) {

            navigator.serviceWorker.register('./sw.js', { scope: '/' }).then(event => {

                console.log("SW registered");

            }, reject => {

                console.log("SW registration failed.");


            })
        }


    }



}