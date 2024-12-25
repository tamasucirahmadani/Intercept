import Login from "../PageObjects/LoginPage.js";

describe('pom', () => {
    it('Login',() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })
})
it.only('Login',() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    const ln=new Login();
    ln.setUserName("Admin")
    ln.setPassword("admin123")
    ln.clickSubmit();
    ln.verifyLogin();
})