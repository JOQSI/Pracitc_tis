describe('Подтверждение отклика', () => {
    it('Работодатель может подтвердить отклик', () => {
        // Логин работодателя
        cy.visit('https://dev.profteam.su/login');

        cy.get('.form-input--text').type('testerStudent');
        cy.get('.form-input--password').type('Password1');
        cy.get('.form__buttons > :nth-child(3)').click();//Метод в Cypress выбирает элемент из массива по индексу. 
        // Это полезно, когда несколько элементов соответствуют одному селектору, 
        // и нужно взаимодействовать с конкретным элементом.

        cy.get(':nth-child(5) > .menu-item__item-name').click();
        cy.get('.infinite-loader > :nth-child(1) > .button').click();
        cy.get('.status-open__buttons > :nth-child(2)').click();
    });
});