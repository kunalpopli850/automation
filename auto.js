let pup=require("puppeteer");

let gPage;

//PPTR.DEV opens the documentation of puppeteer
let gBrow;

pup.launch({headless :false})
.then(function(browser){
 return browser.newPage();
})
.then(function(page){
gPage=page;

return page.goto("https://www.google.com/")
})
// search cats name
.then(function(){
    return gPage.type("input.gLFyf.gsfi","cats");
})
 .then(function(){
    return Promise.all([
    gPage.waitForNavigation(),
    gPage.click(".FPdoLc.lJ9FBc [value='Google Search']")
    ])
})
.then(function(){
    return Promise.all([
    gPage.waitForNavigation(),
    gPage.click("[data-hveid='CAEQAg']")
    ])
})
.then(function(){
    return gPage.screenshot({path :"ss.png"});
})
.then(function(){
    return gBrow.close();
})
.catch(function(err){
    console.log(err)
})