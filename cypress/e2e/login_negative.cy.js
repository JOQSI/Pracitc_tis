
describe('Позитивная авторизация', () => {
    it('Пользователь авторизуется', () => {
        
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('');
        cy.get('input[type=password]').type('');
        cy.get('button[type=submit]').eq(2).click();

    });
});