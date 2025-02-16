/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/");
        // This will likely fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click();
        // skincareLink.click();

        //This is better but not recommended anyway
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // skincareLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click();
        
        //This is the recommended approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        const header = cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Skincare')
        })
        
    });
    
})