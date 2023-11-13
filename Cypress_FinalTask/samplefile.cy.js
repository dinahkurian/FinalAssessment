import "/cypress/support/commands"
import Login from "/cypress/pageobjects/loginpage.js";
import Home from "/cypress/pageobjects/homepage.js";
import 'cypress-file-upload';
describe("OrangeHRM Testcases", () => {
   
    
    const ob = new Login();
    const obj=new Home();

// beforeEach(()=>{
//     cy.fixture('sampleselectors.json').then((data)=>{
//         cy.fixture('sampleselectors2.json').then((data2)=>{
//       ob.visit();
//       cy.login(data,data2);
//          });
//          });




    it("T1: open URL", () => {
        ob.visit(); 
        cy.url().should('include','orangehrmlive.com');
        cy.get("img[alt='company-branding']").should('exist');
    });


    it("T2: Login with valid", () => {
       
        cy.fixture('sampleselectors.json').then((data)=>{
            cy.fixture('sampleselectors2.json').then((data2)=>{
          ob.visit();
cy.login(data,data2);
obj.admin(data2.Admin);
cy.wait(4000);
obj.verifyAdmin(data2.AdminPage,data.admin);
            });
        });
    });
   
    
    it("T3: Login with invalid", () =>{

        cy.fixture('sampleselectors.json').then((data)=>{
            cy.fixture('sampleselectors2.json').then((data2)=>{
          ob.visit();
cy.invalidlogin(data,data2);


    });
});

});



it("T4: Forgot Password", () =>{

    cy.fixture('sampleselectors.json').then((data)=>{
        cy.fixture('sampleselectors2.json').then((data2)=>{
      ob.visit();
cy.invalidlogin(data,data2);
obj.forgotPassword(data2.Forgot1,data2.Forgot2,data2.Forgot3,data2.Forgot4,data.Alert2,data.Alert3);

});
});

});







it("T5: Admin with drop down", () => {
       
    cy.fixture('sampleselectors.json').then((data)=>{
        cy.fixture('sampleselectors2.json').then((data2)=>{
            ob.visit();
      cy.login(data,data2);
      cy.wait(4000);
      
      obj.dropDown(data2.Logout1);
// obj.admin(data2.Admin);
// cy.wait(4000);
// obj.verifyAdmin(data2.AdminPage,data.admin);
// //obj.dropDown(data2.Drop1,data2.Drop2,data2.Drop3,data.value);
// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
// cy.wait(4000);
// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select('Admin');
        });
    });
});





it("T6: File upload", () => {
       
    cy.fixture('sampleselectors.json').then((data)=>{
        cy.fixture('sampleselectors2.json').then((data2)=>{
            ob.visit();
      cy.login(data,data2);
      cy.wait(4000);
      
obj.fileUpload(data2.File1,data2.File2,data2.File3,data2.File4,data.Msg2);

 });
    });
});











it("T7: alert window", () => {
       
    cy.fixture('sampleselectors.json').then((data)=>{
        cy.fixture('sampleselectors2.json').then((data2)=>{
            ob.visit();
            cy.login(data,data2);
            cy.wait(4000);
obj.admin(data2.Admin);
 cy.wait(4000);
obj.alertMsg(data2.Msgelm,data.Msg);
        });
    });
});




it("T8: Mouse acticity", () => {
       
    cy.fixture('sampleselectors.json').then((data)=>{
        cy.fixture('sampleselectors2.json').then((data2)=>{
            ob.visit();
            cy.login(data,data2);
            cy.wait(4000);
obj.mouseActivity(data2.Mouse1,data2.Mouse2,data2.Mouse3);
        });
    });
});


it("T9: Search Bar", () => {
       
    cy.fixture('sampleselectors.json').then((data)=>{
        cy.fixture('sampleselectors2.json').then((data2)=>{
            ob.visit();
            cy.login(data,data2);
            cy.wait(4000);
obj.searchActivity(data2.Search1,data2.Search2,data.Searchval)
        });
    });
});




it("T10: logout", () => {
       cy.fixture('sampleselectors.json').then((data)=>{
        cy.fixture('sampleselectors2.json').then((data2)=>{
            ob.visit();
            cy.login(data,data2);
            cy.wait(4000); 
obj.logoutActivity(data2.Logout1,data2.Logout2,data2.Logout3,data.Log1,data.Log2);
        });
    });
});

});