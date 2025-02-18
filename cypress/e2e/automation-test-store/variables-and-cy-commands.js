/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("learning about Variable in cypress", () => {
        cy.visit("https://www.automationteststore.com/");
        // This will likely fail
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        makeupLink.click();
        skincareLink.click();

        //This is better but not recommended anyway
        const makeupLink2 = cy.get("a[href*='product/category&path=']").contains("Makeup")
        makeupLink2.click();
        const skincareLink2 = cy.get("a[href*='product/category&path=']").contains("Skincare")
        skincareLink2.click();

        //This is the recommended approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        const header = cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Skincare')
        })
    })

            
    it.only("learning to use yielded elements", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        
        //1st approach: Uses cypress commands and chaining
        //Explain: find the element that has id contactUsfrm, and also within that element, make sure it also has text 'Contact Us Form'. Then from that element, find element with id field_11 and verify...
        //Chỗ này mà mà expect sai value là dek biết debug luôn, nó bảo lỗi ở should() chứ ko nói cụ thể actual đã là gì như seleniumselenium
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name') 
        

        //2nd approach: Jquery Approach
        //When using Jquery, best practice is to use promise - then, to making sure the order of execution
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            //This approach can add as many embedded code as u want
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })

        //2nd approach is used when you want to implement additional logic
        
    });
})