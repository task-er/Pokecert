import { HOME } from '../../dataset'

// TODO: 사이즈 별로 분리
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

  describe('권한 확인', () => {
    it('Complete 페이지 접근 불가능 확인', () => {
      cy.checkAccess( `${BASE_URL}/complete`, false)
    })
  })
})

// const sizes = ['iphone-6', 'ipad-2', [1024, 768]]