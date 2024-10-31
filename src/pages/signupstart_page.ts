// @ts-check

import { Page } from "@playwright/test";
import SignUpFinishPage from "../pages/signupfinish_page";
import ProfilePage from "./profile_page";

export default class  SignUpStartPage
{
    private readonly txtEmailAddress = "input[name='email']";
    private readonly txtPassword = "input[name='password']";
    private readonly btnContinue = "button[type='button']";

    constructor(private page:Page){
        
    }

    async openSignUpPage()
    {
        await this.page.goto("https://entcartut.theentertainerme.com/signin-up-start");
    }


    async enterEmailAddress(emailAddress: string)
    {
        await this.page.locator(this.txtEmailAddress).type(emailAddress, {delay: 100});
    }

    async enterPassword(password: string)
    {
        await this.page.locator(this.txtPassword).type(password, {delay: 100});
    }


    async signUp()
    {
        await this.page.locator(this.btnContinue).click();
        await this.page.waitForTimeout(1000);
        return new SignUpFinishPage(this.page);
    }


    async signIn(email:string, password: string)
    {
        await this.enterEmailAddress(email)
        await this.page.locator(this.btnContinue).click();
        await this.enterPassword(password);
        await this.page.locator(this.btnContinue).click();
        await this.page.waitForTimeout(1000);
        return new ProfilePage(this.page);
    }


};