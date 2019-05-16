import axios from 'axios'

export default {
    getCoupons() {
        var officialCoupons = {};
        var response = axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.burgerking.de/api/o2uvrPdUY57J5WwYs6NtzZ2Knk7TnAUY/v4/de/de/coupons/`);
        return response;
    },
    finalURL(url) {
        var result = "";
        var splittedUrl = url.split("/");
        for (var i = 0; i < splittedUrl.length; i++) {
            if (!splittedUrl[i].includes("image-thumb")) {
                result += splittedUrl[i]+"/";
            }
        }
        return result;
    }
}