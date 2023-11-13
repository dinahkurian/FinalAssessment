class Home
{
  
forgotPassword(forgot1,forgot2,forgot3,forgot4,alert2,alert3)
{
    cy.get(forgot1).click();
    cy.get(forgot2).type(alert2);
    cy.get(forgot3).click();
    cy.get(forgot4).should('have.text',alert3);
}
    admin(ad)
    {
    cy.get(ad).click();
   
    }



    verifyAdmin(adminp,adminm)
    {
        cy.get(adminp).should('have.text',adminm);
    }


    // dropDown(drop1,drop2,drop3,val)
    dropDown(logout1)
    {
        cy.get(logout1).click();    
        cy.wait(4000);
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").contains('Support').click();
        cy.get(".oxd-text.oxd-text--p.orangehrm-sub-title").should('have.text','Customer Support');





// cy.get(drop).select(val).should('have.value',val);
   

    // cy.get(drop1).click();
    
    // cy.get(drop2).should('be.visible');
    // cy.wait(4000);
    //    cy.contains(drop3,val).click();
       
       }



   fileUpload(file1,file2,file3,file4,msg2)
   {
    cy.get(file1).click();
cy.get(file2).click();
cy.get(file3).attachFile('s1.docx');
cy.wait(5000);
cy.get(file4).click();
cy.wait(5000);
cy.on('window:alert',(t)=>{
    expect(t).to.contains(msg2).should('be.visible');
   })
   }

   







    alertMsg(msgelm,msg)
    {
        //cy.get(msgelm).click();
        cy.get(msgelm).click({ force: true });
        //cy.get('.orangehrm-modal-header > .oxd-text').should('have.text','Are You Sure?')
cy.on('window:confirm',(t)=>{
    expect(t).to.contains(msg);
   
})

    }



   
mouseActivity(mouse1,mouse2,mouse3)
{
    cy.get(mouse1).click();
cy.wait(4000);

        cy.get(mouse2).trigger('mouseover').click();
        cy.get(mouse3).should('be.visible');
}




searchActivity(search1,search2,searchval)
{
    cy.get(search1).type(searchval);
    cy.get(search2).should('have.text',searchval);
}



logoutActivity(logout1,logout2,logout3,log1,log2)
{
    cy.get(logout1).click();    
cy.wait(4000);
   cy.get(logout2).contains(log1).click();
cy.get(logout3).should('have.text',log2);
}
}
export default Home;