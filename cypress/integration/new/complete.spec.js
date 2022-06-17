import { SELECTION } from '../../dataset'

// TODO: 사이즈 별로 분리
describe('띠부띠부씰 다 모은 경우', () => {
  const BASE_URL = Cypress.config().baseUrl

  beforeEach(() => {
    cy.visit('/')
  })


  describe('권한 확인', () => {
    it('Complete 페이지 접근 불가능 확인', () => {
      cy.checkAccess( `${BASE_URL}/complete`, false)
    })

    it('Complete 페이지 접근 가능 확인', () => {})
  })

  describe('버튼 클릭', () => {
    it('DOWNLOAD CERTIFICATION 버튼 클릭시 PDF 다운로드 확인', () => {})
    it('GO TO THE FIRST PAGE 버튼 클릭시 Home 페이지로 이동', () => {})
  })

})

// const sizes = ['iphone-6', 'ipad-2', [1024, 768]]