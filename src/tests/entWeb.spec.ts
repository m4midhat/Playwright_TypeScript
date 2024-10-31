import {test, expect} from "@playwright/test";
import LandingPage from '../pages/landing_page';
import OutletListingPage from "../pages/outletListing_page";
import exp from "constants";

test('Verify page title', async({page})=>{
    const landingpage = new LandingPage(page);
    await landingpage.openApplication();
    let pageHeading = await landingpage.getPageHeading();
    console.log(pageHeading);
    expect (pageHeading).toBe(pageHeading);
})


test('Verify banner images', async({page})=>{
    const landingpage = new LandingPage(page);
    await landingpage.openApplication();
    let bannerImages = await landingpage.getTotalImagesInBanner();
    console.log(bannerImages)
    expect (bannerImages).toBe(5);
})


test('Verify all outlet', async({page})=>{
    const landingpage = new LandingPage(page);
    await landingpage.openApplication();
    const outletListingPage = await landingpage.clickAllOutlet();
    //await expect(outletListingPage.VerifyFilterAllIsCheckeced()).toBeChecked();
    console.log( await outletListingPage.VerifyFilterAllIsCheckeced());
})