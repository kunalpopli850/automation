let pup=require("puppeteer");

(async function(){
    let totalV=0;
    const browser=await  pup.launch({
        headless :false,
       defaultViewport :null,
       args:["--start-maximized"],
       //slowMo:50
    })
  const page =await browser.newPage();
  await page.goto("https://www.youtube.com/playlist?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj")
   
  await page.waitForSelector(".style-scope.yt-formatted-string")

  totalV= await page.evaluate(function(){
  let a=document.querySelectorAll(".style-scope.yt-formatted-string");
  let s=a[1].innerText
  if(s.length>3){
    s=s.split(",").join();
  }
  return Number(a[1].innerText);
  })
  console.log(totalV);
  await browser.close();
})()
.catch(function(err){
  console.log(err)
})