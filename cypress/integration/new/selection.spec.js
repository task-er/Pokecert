import { SELECTION } from '../../dataset'

// TODO: 사이즈 별로 분리
describe('띠부띠부씰 선택 화면', () => {
  const BASE_URL = Cypress.config().baseUrl

  beforeEach(() => {
    cy.visit('/selection')
  })


  describe('버튼 클릭', () => {
    it('이전 버튼 클릭시 Home 페이지로 이동', () => {
      cy.buttonClick(SELECTION.BUTTON_PREVIEW)
        .then(() => {
          cy.url().should('eq', `${BASE_URL}/`)
        })
    })
  })
})

// const sizes = ['iphone-6', 'ipad-2', [1024, 768]]