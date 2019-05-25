import axios from 'axios'

export default {
    getCoupons() {
        var response = axios.get(`https://bk.nicoberlaender.de/allCoupons.php`);
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