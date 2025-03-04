describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.litres.ru')
  
      // Вводим данные в поле поиска
      cy.get('[data-testid="header__search-input--desktop"]').type('тестирование на JavaScript')
  
      // Нажимаем на кнопку "Найти"
      cy.contains('[data-testid="header__search-button--desktop"]', 'Найти').click()
  
      // Кликаем на изображение
      cy.get('img[itemprop="image"][alt="Тестирование JavaScript"]').click()
  
      // Проверяем содержание текста по заголовку
      cy.contains('h1[itemprop="name"].BookCard-module__book__mainInfo__title_2zz4M', 'Тестирование JavaScript')
    })
  })