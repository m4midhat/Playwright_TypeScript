// @ts-check
import {test, expect} from "@playwright/test";
import SignUpStartPage from '../pages/signupstart_page'
import SignUpFinishPage from "../pages/signupfinish_page";
import { faker, ur } from '@faker-js/faker';
import exp from "constants";


test('Register & Dubai product purchase with XL Offer', async({page})=>{
    const signUpStartPage = new SignUpStartPage(page);
    await signUpStartPage.openSignUpPage();
    await signUpStartPage.enterEmailAddress(faker.internet.email());
    const signUpFinishPage = await signUpStartPage.signUp();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const landingPage = await signUpFinishPage.createNewAccount(firstName, lastName, 'P@ssword123!!@@');
    await landingPage.clickOnBuyNow(0);
    const checkOutPage = await landingPage.continueWithXLOption();
    //console.log( await checkOutPage.getParoductCount());
    const prodName = await checkOutPage.getProductName();
    console.log(prodName);
    //await checkOutPage.acceptToAgeVerification();
    //await checkOutPage.acceptToCheers();
    await checkOutPage.acceptToPrivacyPolicy();
    await checkOutPage.clickContinueButton();
    await checkOutPage.buyProductViaCard(firstName+' '+lastName, '5555444433331111', '03/30', '737')
    //await checkOutPage.expandPaymentMethod();
    //await checkOutPage.clickCreditCard();
    //await checkOutPage.enterCardHolderName('Midhat');
    //await checkOutPage.enterCardNumber('5555444433331111');
    //await checkOutPage.enterCardExpiryDate('03/30');
    //await checkOutPage.enterCardCVV('737');
    //await checkOutPage.clickPayNow();
    const url = await checkOutPage.returnURL();
    console.log(url);
    expect (url).toContain('thankyou');
});



test('Register & Dubai product purchase without XL Offer', async({page})=>{
    const signUpStartPage = new SignUpStartPage(page);
    await signUpStartPage.openSignUpPage();
    await signUpStartPage.enterEmailAddress(faker.internet.email());
    const signUpFinishPage = await signUpStartPage.signUp();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const landingPage = await signUpFinishPage.createNewAccount(firstName, lastName, 'P@ssword123!!@@');
    await landingPage.clickOnBuyNow(0);
    const checkOutPage = await landingPage.continueWithoutXLOption();
    //console.log( await checkOutPage.getParoductCount());
    const prodName = await checkOutPage.getProductName();
    console.log(prodName);
    //await checkOutPage.acceptToAgeVerification();
    //await checkOutPage.acceptToCheers();
    await checkOutPage.acceptToPrivacyPolicy();
    await checkOutPage.clickContinueButton();
    await checkOutPage.buyProductViaCard(firstName+' '+lastName, '5555444433331111', '03/30', '737')
    //await checkOutPage.expandPaymentMethod();
    //await checkOutPage.clickCreditCard();
    //await checkOutPage.enterCardHolderName('Midhat');
    //await checkOutPage.enterCardNumber('5555444433331111');
    //await checkOutPage.enterCardExpiryDate('03/30');
    //await checkOutPage.enterCardCVV('737');
    //await checkOutPage.clickPayNow();
    const url = await checkOutPage.returnURL();
    console.log(url);
    expect (url).toContain('thankyou');
})

/*
test('Login & buy product with XL offer', async({page})=>{
    const signUpStartPage = new SignUpStartPage(page);
    await signUpStartPage.openSignUpPage();
    const profilePage = await signUpStartPage.signIn('midhat.entawsm@gmail.com','P@ssword123!!@@');
    const landingPage = await profilePage.clickOnLogo();
    await landingPage.clickOnBuyNow(0);
    const checkOutPage = await landingPage.continueWithXLOption();
    //console.log( await checkOutPage.getParoductCount());
    const prodName = await checkOutPage.getProductName();
    console.log(prodName);
    //await checkOutPage.acceptToAgeVerification();
    //await checkOutPage.acceptToCheers();
    //await checkOutPage.acceptToPrivacyPolicy();
    await checkOutPage.clickContinueButton();
    await checkOutPage.buyProductViaCard('Midhat', '5555444433331111', '03/30', '737')
    //await checkOutPage.expandPaymentMethod();
    //await checkOutPage.clickCreditCard();
    //await checkOutPage.enterCardHolderName('Midhat');
    //await checkOutPage.enterCardNumber('5555444433331111');
    //await checkOutPage.enterCardExpiryDate('03/30');
    //await checkOutPage.enterCardCVV('737');
    //await checkOutPage.clickPayNow();
    const url = await checkOutPage.returnURL();
    console.log(url);
    expect (url).toContain('thankyou');
}) */