describe('Подтверждение вакансии', () => {
    it('подтверждение', () => {

        cy.visit('https://dev.profteam.su/login');

        cy.get('.form-input--text').type('testerEmployer');
        cy.get('.form-input--password').type('Password1');
        cy.get('.form__buttons > :nth-child(3)').click();

        cy.get(':nth-child(5) > .menu-item__item-name').click();
        cy.get('.infinite-loader > :nth-child(1) > .button').click();//можно менять nth-child(1) в зависимости от расположения карточки
        cy.get('.status-open__buttons > :nth-child(1)').click
    });
});