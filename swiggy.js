let pup=require("puppeteer");

(async function(){
    let totalV=0;
    let add="1392 sector 13 karnal"
    const browser=await  pup.launch({
        headless :false,
       defaultViewport :null,
       args:["--start-maximized"],
       slowMo:50
    })
  const page =await browser.newPage();
  await page.goto("https://www.swiggy.com")

  await page.waitForSelector("._3Um38._2oQ4_")
   await page.type("._3Um38._2oQ4_",add);

   await page.waitForSelector("._3lmRa._2At8F")

   await page.click("._3lmRa._2At8F");

//   await Promise.all([
//     page.waitForNavigation(),
//     page.click("._3lmRa._2At8F")
//     ])
    await page.waitForSelector("li [href='/search']")
   await page.click("li [href='/search']")

   await page.waitForSelector("._2BJMh")
   await page.type("._2BJMh","pizza")
  
   await page.keyboard.press("Enter");
  // await browser.close();

  await page.waitForSelector("[href='/restaurants/dominos-pizza-sector-12-haryana-model-town-karnal-97198']")
   await page.click("[href='/restaurants/dominos-pizza-sector-12-haryana-model-town-karnal-97198']")

})()
//[href='/restaurants/dominos-pizza-sector-12-haryana-model-town-karnal-97198']
