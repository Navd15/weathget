class Utils {

    static checkIDB(callback) {
        let places = []
        for (let place in localStorage) {
            places.push(place);
        }
        callback(places);
    }



}