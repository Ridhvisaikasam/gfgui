
describe("login page",()=>{
    it("check if login is working",()=>{
        cy.intercept({
            method:'POST',
            pathname:'**/identitytoolkit/v3/relyingparty/getAccountInfo',
        }).as('firebaseApi');
        cy.visit("https://gfgui-1705.web.app/LogIn");
        cy.get("[name='email']").type("test31@gmail.com");
        cy.get("[name='password']").type("test31");
        cy.get(".MuiFab-primary > .MuiFab-label").click();
        cy.wait('@firebaseApi');
        cy.url().should("include","Home");
    })
    it("check if incorrect login is working",()=>{
        cy.intercept({
            method:'POST',
            pathname:'**/identitytoolkit/v3/relyingparty/getAccountInfo',
        }).as('firebaseApi');
        cy.visit("https://gfgui-1705.web.app/LogIn");
        cy.get("[name='email']").type("test31@gmail.com");
        cy.get("[name='password']").type("wrongPassword");
        cy.get(".MuiFab-primary > .MuiFab-label").click();
        cy.wait('@firebaseApi');
        cy.get('#errorMessage').invoke('text').should("include","invalid");
    })
})