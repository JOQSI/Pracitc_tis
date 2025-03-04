const searchAndClickLikeButton = (searchText) => {
    cy.get('[data-testid="header__search-input--desktop"]').clear().type(searchText)
    cy.contains('[data-testid="header__search-button--desktop"]', 'Найти').click()
    cy.get('button.LikeButton-module__likeButton_gtG7W').first().click()
  }
  
  describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.litres.ru')
  
      searchAndClickLikeButton('Что такое тестирование')
      searchAndClickLikeButton('Как тестируют в Google')
      searchAndClickLikeButton('Софт отстой и что с этим делать')
      searchAndClickLikeButton('Пиши, сокращай')
      searchAndClickLikeButton('Этой кнопке нужен текст')
      
      cy.get('[data-testid="tab-favorite"]').click()
    })
  })