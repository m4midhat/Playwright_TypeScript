import { Page } from "@playwright/test";
import LandingPage from "./landing_page";

export default class  SignUpFinishPage
{
    private readonly txtFirstName = "//input[@id='Firstname']";
    private readonly txtLastName = "input#Lastname";
    private readonly txtPassword = "input#Createpassword";
    private readonly btnCreateAccount = "button[type='button']";

    constructor(private page:Page){
        
    }


    async createNewAccount(firstName: string, lastName: string, password: string)
    {
        await this.page.locator(this.txtFirstName).fill(firstName);
        await this.page.locator(this.txtLastName).fill(lastName);
        await this.page.locator(this.txtPassword).fill(password);

        await this.page.locator(this.btnCreateAccount).click();
        await this.page.waitForTimeout(1000);
        return new LandingPage(this.page);
    }




};