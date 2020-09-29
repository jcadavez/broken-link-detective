module.exports = {
    trimUrl(url) {
        let ind = url.lastIndexOf("https://");
        url = url.substring(ind+"https://".length);
        ind = url.indexOf("&");
        // console.log("substring...");
        // console.log(url);
        if(ind > 0) url = url.substring(0,ind);
        // console.log("&...");
        // console.log(url);
        ind = url.indexOf("?");
        if(ind > 0) url = url.substring(0,ind);
        // console.log("?...");
        // console.log(url);
        return url.trim();
    }
};