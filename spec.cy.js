describe('Fitur Login ', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
})
it('User Login with Valid Username dan Password',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Admin');
  cy.get('[name="password"]').type('admin123');
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
})
it('User Login with Invalid Username',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Tama');
  cy.get('[name="password"]').type('admin123');
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
})
it('User Login with Invalid Password',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Admin');
  cy.get('[name="password"]').type('tama123');
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
})
it('User Login with Invalid Username dan Password',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Tama');
  cy.get('[name="password"]').type('suci123');
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
})
it('User Login with Valid Username',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Admin');
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
})
it('User Login with Valid Password',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="password"]').type('admin123');
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
})
it('User Login with Invalid karena tidak menginputkan username dan password',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
})
