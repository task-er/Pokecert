import { HOME } from '../dataset'

describe('홈 화면', () => {
  const BASE_URL = Cypress.config().baseUrl

  beforeEach(() => {
    cy.visit('/')
  })


  describe('버튼 클릭', () => {
    it('띠부띠부씰 선택 버튼 클릭시 Selection 페이지 이동', () => {
      cy.buttonClick(HOME.BUTTON_SELECTION)
        .then(() => {
          cy.url().should('eq', `${BASE_URL}/selection`)
        })
    })
  
    it('보관함 버튼 클릭시 Collection 페이지 이동', () => {
      cy.buttonClick(HOME.BUTTON_COLLECTION)
        .then(() => {
          cy.url().should('eq', `${BASE_URL}/collection`)
        })
    })
  })
})
