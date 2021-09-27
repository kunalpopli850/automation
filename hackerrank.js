let pup=require("puppeteer");

let gPage;
let objO;
//PPTR.DEV opens the documentation of puppeteer
let gBrow;
let email="lakefet194@pidhoes.com"
let pass="abcd1234";

 pup.launch({
    headless :false,
   defaultViewport :null,
   args:["--start-maximized"],
  // slowMo:50
})
.then(function(browser){
    gBrow=browser
 return browser.pages();
})
.then(function(pageA){
gPage=pageA[0];

return gPage.goto("https://www.hackerrank.com/auth/login")
})
// search cats name
.then(function(){
    return gPage.type("#input-1",email);
})
.then(function(){
    return gPage.type("#input-2",pass);
})
.then(function(){
    return Promise.all([
    gPage.waitForNavigation(),
    gPage.click("[data-analytics='LoginPassword']")
    ])
})
.then(function(){
    return Promise.all([
    gPage.waitForNavigation(),
    gPage.click("[data-attr1='interview-preparation-kit']")
    ])
})
.then(function(){
    return gPage.waitForSelector("[data-attr1='warmup']");
})
.then(function(){
 return Promise.all([
  gPage.waitForNavigation(),
  gPage.click("[data-attr1='warmup']")
])
})
.then(function(){
    return gPage.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
})
.then(function(){
 return Promise.all([
  gPage.waitForNavigation(),
  gPage.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled")
])
})
.then(function(){
    return gPage.waitForSelector(" [data-attr2='Editorial']");
})
.then(function(){
 return Promise.all([
  gPage.waitForNavigation(),
  gPage.click ("[data-attr2='Editorial']")
])
})
.then(function(){
    return lock(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
})
.then(function(){
  return gPage.waitForSelector(".challenge-editorial-block.editorial-setter-code")
 })
.then(function(){
    return gPage.evaluate(
        function(){
let nameall=document.querySelectorAll(
    ".challenge-editorial-block.editorial-setter-code h3")
let codeall=document.querySelectorAll(
    ".challenge-editorial-block.editorial-setter-code .highlight")
let obj={};
obj.code=codeall[0].innerText;
obj.name=nameall[0].innerText;
return obj;
})
})
.then(function (obj){
objO=obj;
return Promise.all([
    gPage.waitForNavigation(),
    gPage.click ("[data-attr2='Problem']")
  ])

})
.then(function(){
    return gPage.waitForSelector(" .css-1hwfws3");
})
.then(function(){
    return gPage.click(".css-1hwfws3");
})
.then(function(){
    return gPage.type(".css-1hwfws3",objO.name);
})
.then(function(){
    return gPage.keyboard.press("Enter");
})
.then(function(){
    return gPage.click("[type='checkbox']");
})
.then(function(){
    return gPage.waitForSelector("#input-1");
})
.then(function(){
    return gPage.type("#input-1",objO.code);
})
.then(function(){
    return gPage.keyboard.down("Control");
})
.then(function(){
    return gPage.keyboard.press("KeyA");
})
.then(function(){
    return gPage.keyboard.press("KeyX");
})
.then(function(){
    return gPage.keyboard.up("Control");
})
.then(function(){
    return gPage.click(".hr-monaco-editor-parent");
})
.then(function(){
    return gPage.keyboard.down("Control");
})
.then(function(){
    return gPage.keyboard.press("KeyA");
})
.then(function(){
    return gPage.keyboard.press("KeyV");
})
.then(function(){
    return gPage.keyboard.up("Control");
})
.then(function(){
    return gPage.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled")
})
.catch(function(err){
    console.log(err)
})


function lock(select){
    return new Promise(function(resolve, reject){
       gPage.waitForSelector(select)
       .then(function(){
       return gPage.click(select)   
       })
       .then(function(){
           resolve();
       })
       .catch(function(err){
           resolve();
       })
    })
}