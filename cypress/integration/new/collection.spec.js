import { SELECTION } from '../../dataset'
import { medals } from '../../fixtures/medal.json'

// TODO: 사이즈 별로 분리
describe('보관함 화면', () => {
  const BASE_URL = Cypress.config().baseUrl

  beforeEach(() => {
    cy.visit('/collection')
    // TODO: redux settings
  })


  describe('버튼 클릭', () => {
    it('이전 버튼 클릭시 Home 페이지로 이동', () => {
      cy.buttonClick(SELECTION.BUTTON_PREVIEW)
        .then(() => {
          cy.url().should('eq', `${BASE_URL}/`)
        })
    })
  })

  describe('버튼 활성화 확인', () => {
    it('씰 다 모은 경우 다 모았다! 버튼 활성화', () => {})
    it('다 모았다! 버튼 클릭시 Complete 페이지로 이동', () => {})
  })

  describe('씰 클릭', () => {
    it('씰 삭제 확인', () => {})
    it('씰 삭제시 보유수 확인', () => {})
  })

  describe('메달 보유 확인', () => {
    medals.forEach((item) => {
      it(`${item.name} 보유 확인`, () => {})
    })
  })

})

// const sizes = ['iphone-6', 'ipad-2', [1024, 768]]