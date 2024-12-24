describe ('Login',() =>{
it('user login with valid credentials',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Admin');
  cy.get('[name="password"]').type('admin123');
  cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  cy.wait("@actionsummary").then((intercept) =>{
    expect(intercept.response.statusCode).to.equal(200);
  })
})
})
it('user login with invalid credetials', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Tama');
  cy.get('[name="password"]').type('suci123');
  cy.intercept("GET", "**/i18n/messages").as("message");
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  cy.wait("@message").then((intercept) =>{
    expect(intercept.response.statusCode).to.equal(304);
  })
})
it('user login with valid username and invalid password', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Admin');
  cy.get('[name="password"]').type('suci123');
  cy.intercept("GET", "**/i18n/messages").as("message");
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  cy.wait("@message").then((intercept) =>{
    expect(intercept.response.statusCode).to.equal(304);
  })
})
it('user login with valid credentials', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Admin');
  cy.get('[name="password"]').type('admin123');
  cy.intercept("GET", "**/dashboard/shortcuts").as("shorcuts");
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  cy.wait("@shorcuts").then((intercept) =>{
    expect(intercept.response.statusCode).to.equal(200);
  })
})
it('user login with valid credentials', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Admin');
  cy.get('[name="password"]').type('admin123');
  cy.intercept("GET", "**/employees/locations").as("location");
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  cy.wait("@location").then((intercept) =>{
    expect(intercept.response.statusCode).to.equal(200);
  })
})
it('user login with invalid username and valid password', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
  cy.get('[name="username"]').type('Tama');
  cy.get('[name="password"]').type('admin123');
  cy.intercept("GET", "**/i18n/messages").as("message");
  cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  cy.wait("@message").then((intercept) =>{
    expect(intercept.response.statusCode).to.equal(304);
  })
})