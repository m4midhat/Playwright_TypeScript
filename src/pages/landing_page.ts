//@ts-check

import CheckOutPage from "./checkout_page";
import OutletListingPage from "./outletListing_page";
import { Page } from "@playwright/test";

export default class LandingPage 
{
    private readonly landingPageHeading = "//h1[contains(@class,'text-center')]"
    private readonly landingPageBannerImages = "div[class='swiper-wrapper '] img";
    private readonly allOutlet = "//p[normalize-space()='All Outlets']"
    private readonly buyNowButtons = "//section[@id='plans-section']//a[contains(@class,'')][normalize-space()='Buy Now']";
    private readonly upgradeButton = "a#save-btn";
    private readonly dontUpgradeButton = "a#non_product_btn";


    constructor(private page:Page){
        
    }


    async openApplication()
    {
        await this.page.setViewportSize({width: 1750, height: 1920});
        await this.page.goto("/");
        //await this.page.waitForTimeout(20000);
    }

    async getPageHeading()
    {
        return await this.page.locator(this.landingPageHeading).nth(0).textContent();
    }

    async getTotalImagesInBanner()
    {
        return await this.page.locator(this.landingPageBannerImages).count();
    }

    async clickAllOutlet()
    {
        await this.page.locator(this.allOutlet).click();
        await this.page.waitForTimeout(20000);
        return await new OutletListingPage(this.page);
    }
    

    async clickOnBuyNow(index)
    {
        await this.page.locator(this.buyNowButtons).nth(index).click();
    }


    async continueWithXLOption()
    {
        await this.page.locator(this.upgradeButton).click();
        return new CheckOutPage(this.page);
    }


    async continueWithoutXLOption()
    {
        await this.page.locator(this.dontUpgradeButton).click();
        return new CheckOutPage(this.page);
    }


};