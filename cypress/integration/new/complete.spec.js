import { SELECTION } from '../../dataset'

// TODO: 사이즈 별로 분리
describe('띠부띠부씰 선택 화면', () => {
  const BASE_URL = Cypress.config().baseUrl

  beforeEach(() => {
    cy.visit('/')
  })


  describe('권한 확인', () => {
    it('Complete 페이지 접근 불가능 확인', () => {
      cy.checkAccess( `${BASE_URL}/complete`, false)
    })
  })
})

// const sizes = ['iphone-6', 'ipad-2', [1024, 768]]