// @ts-check

import { th } from "@faker-js/faker";
import { Page } from "@playwright/test";

export default class  CheckOutPage
{
    private readonly productName = "div#cart h5";
    private readonly checkBoxSwitches = "//input[@id='switch']/parent::label";
    private readonly continueButton = "button#consent_btn"
    private readonly dropDowns = "span.downArrow";
    private readonly creditCardOption = "input#radio-option-1";
    private readonly pointsPayOption = "input#radio-option-3";
    private readonly cardHolderName = "input.adyen-checkout__card__holderName__input";
    private readonly frame = ".iframe_cart_adyen";
    private readonly cardCVCTxt = "input[autocomplete='cc-csc']";
    private readonly cardExpiryTxt = "input[autocomplete='cc-exp']";
    private readonly cardNumberTxt = "input[autocomplete='cc-number']";
    private readonly payButtonForCard = 'span.adyen-checkout__button__content';
    private readonly paymentDetailsFrame = '.js-iframe'

    constructor(private page:Page){
        
    }

    async getParoductCount()
    {
        this.page.waitForTimeout(1000);
        const productCount = await this.page.locator(this.productName).count();
        return productCount;
    }

    async getProductName()
    {
        const productCount = await this.page.locator(this.productName).nth(0).textContent();
        return productCount;
    }

    async acceptToAgeVerification()
    {
        await this.page.locator(this.checkBoxSwitches).nth(0).click();
        await this.page.waitForTimeout(1000);
    }

    async acceptToCheers()
    {
        await this.page.locator(this.checkBoxSwitches).nth(1).click();
        await this.page.waitForTimeout(1000);
    }

    async acceptToPrivacyPolicy()
    {
        await this.page.locator(this.checkBoxSwitches).nth(2).click();
        await this.page.waitForTimeout(1000);

    }

    async clickContinueButton()
    {
        await this.page.locator(this.continueButton).click();
    }


    private async expandPaymentMethod()
    {
        await this.page.locator(this.dropDowns).nth(2).click();
    }

    private async clickCreditCard()
    {
        await this.page.locator(this.creditCardOption).click();
    }

    async clickPointsPay()
    {
        await this.page.locator(this.pointsPayOption).click();
    }

    private async enterCardHolderName(name:string)
    {
        await this.page.waitForTimeout(1000);
        await this.page.frameLocator(this.frame).locator(this.cardHolderName).click();
        await this.page.frameLocator(this.frame).locator(this.cardHolderName).type(name, {delay: 200});
    }

    

    private async enterCardCVV(cvv:string)
    {
        await this.page.frameLocator(this.frame).frameLocator(this.paymentDetailsFrame).nth(2).locator(this.cardCVCTxt).click();
        await this.page.frameLocator(this.frame).frameLocator(this.paymentDetailsFrame).nth(2).locator(this.cardCVCTxt).type(cvv, {delay:200});
    }


    private async enterCardExpiryDate(expiryDate:string)
    {
        await this.page.frameLocator(this.frame).frameLocator(this.paymentDetailsFrame).nth(1).locator(this.cardExpiryTxt).click();
        await this.page.frameLocator(this.frame).frameLocator(this.paymentDetailsFrame).nth(1).locator(this.cardExpiryTxt).type(expiryDate, {delay:200});
    }

    private async enterCardNumber(cardNumber:string)
    {
        await this.page.frameLocator(this.frame).frameLocator(this.paymentDetailsFrame).nth(0).locator(this.cardNumberTxt).click();
        await this.page.frameLocator(this.frame).frameLocator(this.paymentDetailsFrame).nth(0).locator(this.cardNumberTxt).type(cardNumber, {delay:200});
    }

    private async clickPayNow()
    {
        await this.page.frameLocator(this.frame).locator(this.payButtonForCard).click();
        await this.page.waitForTimeout(1000);
    }

    async returnURL()
    {
        await this.page.waitForTimeout(3000);
        return await this.page.url();
    }



    async buyProductViaCard(cardHolderName: string, cardNumber: string, expiryDate: string, cvv: string)
    {
        await this.expandPaymentMethod();
        await this.clickCreditCard();
        await this.enterCardHolderName(cardHolderName);
        await this.enterCardNumber(cardNumber);
        await this.enterCardExpiryDate(expiryDate);
        await this.enterCardCVV(cvv)
        await this.clickPayNow();
    }

};