const utils = require('../pageobjects/utils.page.js');

describe('BI webpage', () => {
    it('should get all links', function() {
        browser.url("/best-interactive-cat-toys");
        let urls = $$('.insider-pick-button.headline-bold').map(link => decodeURIComponent(link.getAttribute('href')));
        let affiliate = urls.map(url => utils.trimUrl(url));
        urls = new Set(urls);
        affiliate = new Set(affiliate);
        let statusMap = new Map();
        browser.cdp('Network', 'enable');
        browser.on('Network.responseReceived', params => {
            const url = utils.trimUrl(params.response.url);
            if(url !== "" && affiliate.has(url) && !statusMap.has(url)){
                console.log("Url : "+url+"\tResponse : "+params.response.status);
                statusMap.set(url, params.response.status);
            }
        });
        urls.forEach(url => {
            console.log("===================================");
            statusMap = new Map();
            try {
                console.log(`Navigating to ${url}`);
                browser.url(url);
                const affiliateUrl = utils.trimUrl(url);
                browser.waitUntil(() => statusMap.has(affiliateUrl), {
                    timeout: 2000,
                    timeoutMsg: `After 2.0s, cannot find network response for: ${affiliateUrl}`
                });
                console.log(`Status is : ${statusMap.get(affiliateUrl)}`);
            } catch(error){
                console.log(`${error.name}\n${error.message}`);
            } finally{
                browser.back();
            }
        });
    });
});


