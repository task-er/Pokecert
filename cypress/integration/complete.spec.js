import { CEAL, MODAL, COMPLETE } from '../dataset'

// TODO: 사이즈 별로 분리
describe('띠부띠부씰 다 모은 경우', () => {
  const BASE_URL = Cypress.config().baseUrl

  before(() => {
    cy.visit('/')
  })


  describe('권한 확인', () => {
    it('Complete 페이지 접근 불가능 확인', () => {
      cy.checkAccess(`${BASE_URL}/complete`, false)
    })

    it('Complete 페이지 접근 가능 확인', () => {
      cy.visit('/selection')
      Object.keys(CEAL).forEach((ceal) => {
        cy.buttonClick(CEAL[ceal])
        cy.buttonClick(MODAL.BUTTON_OK)
      })

      cy.wait(2000)
      cy.url().should('eq', `${BASE_URL}/complete`)
    })
  })

  describe('버튼 클릭', () => {
    it('DOWNLOAD CERTIFICATION 버튼 클릭시 PDF 다운로드 확인', () => {
      cy.buttonClick(COMPLETE.BUTTON_DOWNLOAD)
      cy.readFile('cypress/downloads/certification.pdf').should('exist')
    })

    it('GO TO THE FIRST PAGE 버튼 클릭시 Home 페이지로 이동', () => {
      cy.buttonClick(COMPLETE.BUTTON_HOME)

      cy.wait(2000)
      cy.url().should('eq', `${BASE_URL}/`)
    })
  })

})
