/// <reference types= "cypress" />
describe('this is my homework test', () => {
    it('this for test the homework', () => {
        cy.visit("https://automationteststore.com/")



        cy.get('#special > .container-fluid').find(".pricenew").invoke("text").then((new_price) => {

            let priceArray = new_price.split('$');
            let modifiedPrice = 0;

            for (let i = 0; i < priceArray.length; i++) {
                let partValue = Number(priceArray[i]);

                if (isNaN(partValue)) {
                    partValue = 0;
                }

                modifiedPrice += partValue;
            }

            alert(`the sum of the new price is  ${modifiedPrice} `)
        })

        cy.get('#special > .container-fluid').find(".priceold").invoke("text").then((old_price) => {
            let priceArray = old_price.split('$');
            let modifiedPrice = 0;

            for (let i = 0; i < priceArray.length; i++) {
                let partValue = Number(priceArray[i]);

                if (isNaN(partValue)) {
                    partValue = 0;
                }

                modifiedPrice += partValue;
            }

            alert(`the sum of the old price is  ${modifiedPrice} `)
        })

    });
});