describe('Создание новой вакансии', () => {
    it('Работодатель может создать новую вакансию', () => {
        // Логин работодателя
        cy.visit('https://dev.profteam.su/login');
        cy.get('.form-input--text').type('testerEmployer');
        cy.get('.form-input--password').type('Password1');
        cy.get(':nth-child(3) > .button').click();
        cy.wait(2000)

        // Переход к созданию вакансии
        cy.wait(1000)
        cy.get(':nth-child(7) > .menu-item__item-name').click();
        cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

        // Заполнение формы
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--', { timeout: 10000 }).type('Работа на заводе');
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__label').click();
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected').click();       
        cy.get('.form-select__items > :nth-child(1)').click();
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(1)').click()
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type('Нужно работать 24/7')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type('Радуйся выходные будут')
        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click();
        cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click();
        
    });
});