/// <reference types="cypress" />

describe("Iterate over elements", () => {
    it("Get all product's text", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    });

            
    it.only("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if($el.text().includes('Eau Parfumee au The Vert Shampoo')) {
                cy.wrap($el).click()

                //Đúng là có thể dùng $el.click() nhưng click() lúc này là của Jquery nhưng mình ko muốn
                //Cho nên dùng wrap() để dùng được cypress commands
            }
        })
    });
})