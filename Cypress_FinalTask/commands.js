// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//require('cypress-downloadfile/lib/downloadFileCommand')





// Cypress.Commands.add('login',(Selector,data)=>{
//     cy.get(Selector.elemUserName).type(data.username);
//     cy.get(Selector.elemPassword).type(data.password);
//     cy.get(Selector.elemSubmitBtn).click();
// })

// Cypress.Commands.add('assertion',(Selector,data)=>{
//     if(data.username === 'Admin' && data.password === 'admin123'){
//         cy.get(Selector.elemDash).should('have.text',data.expected);

//     }else{
//         cy.get(Selector.elemAlert).should('have.text',data.expected);
//     }
// })




Cypress.Commands.add('login',(data,data2)=>{
    cy.get(data2.UserName).type(data.username);
    cy.get(data2.Password).type(data.password);
    cy.get(data2.LoginBtn).click();
    cy.get(data2.LabelMsg).should('have.text',data.expected);  
})
Cypress.Commands.add('invalidlogin',(data,data2)=>{
    cy.get(data2.UserName).type(data.wronguser);
    cy.get(data2.Password).type(data.wrongpass);
    cy.get(data2.LoginBtn).click();
    cy.get(data2.AlertMsg).should('have.text',data.alert);  
})