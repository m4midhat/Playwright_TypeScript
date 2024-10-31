//@ts-check
import { Page } from "@playwright/test";

export default class OutletListingPage 
{

    private readonly CheckBoxFilterALL = "input[id='customAllCheck']";

    constructor(private page:Page){
        
    }


    async VerifyFilterAllIsCheckeced()
    {
        await this.page.locator(this.CheckBoxFilterALL).click();
        return await this.page.locator(this.CheckBoxFilterALL).getAttribute('checked');
    }



};