module.exports = {
    trimUrl(url) {
        let ind = url.lastIndexOf("https://");
        url = url.substring(ind+"https://".length);
        ind = url.indexOf("&");
        if(ind > 0) url = url.substring(0,ind);
        ind = url.indexOf("?");
        if(ind > 0) url = url.substring(0,ind);
        return url.substring(0,ind);
    }
};