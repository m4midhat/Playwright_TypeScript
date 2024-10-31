// @ts-check

import { Page } from "@playwright/test";
import LandingPage from "./landing_page";

export default class  ProfilePage
{
    private readonly entertainerLogo = "img[title='Entertainer Dubai & N. Emirates Logo']";

    constructor(private page:Page){
        
    }

    async clickOnLogo()
    {
        await this.page.locator(this.entertainerLogo).click();
        return new LandingPage(this.page);
    }

};