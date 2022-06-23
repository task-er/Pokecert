import { CEAL, SELECTION, MODAL, HOME, COMPLETE, MEDAL } from '../../dataset'
import { pokemons } from '../../fixtures/pokemon.json'

describe('띠부띠부씰 선택 화면', () => {
  const BASE_URL = Cypress.config().baseUrl

  
  describe('버튼 클릭', () => {
    before(() => {
      cy.visit('/selection')
    })

    it('이전 버튼 클릭시 Home 페이지로 이동', () => {
      cy.buttonClick(SELECTION.BUTTON_PREVIEW)
      cy.wait(2000)
      cy.url().should('eq', `${BASE_URL}/`)
    })
  })

  describe('씰 클릭', () => {
    const randInt = Math.floor(Math.random() * 159) + 1;
    const selected_pokemon_name = pokemons.filter((pokemon) => { return pokemon.id === randInt })[0].name

    before(() => {
      cy.visit('/selection')
    })

    it('씰 추가 정보 확인', () => {
      // 보관함 0개
      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('0 / 159')

      // 씰 선택 안 됨
      cy.get(CEAL[`BUTTON_CEAL_${randInt}`])
        .should('not.have.class', 'selected')

      // 씰 클릭
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])

      // 씰 정보 확인
      cy.get(MODAL.MESSAGE_CONTENT)
        .contains(selected_pokemon_name)
        .contains('추가')
    })

    it('씰 추가 확인', () => {
      // 씰 추가 버튼 클릭
      cy.buttonClick(MODAL.BUTTON_OK)

      // 씰 선택 됨
      cy.get(CEAL[`BUTTON_CEAL_${randInt}`])
        .should('have.class', 'selected') 
    })

    it('씰 추가시 보유수 확인', () => {
      // 보관함 1개
      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('1 / 159')
    })

    it('씰 삭제 정보 확인', () => {
      // 씰 선택 됨
      cy.get(CEAL[`BUTTON_CEAL_${randInt}`])
        .should('have.class', 'selected')

      // 씰 클릭
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])

      // 씰 정보 확인
      cy.get(MODAL.MESSAGE_CONTENT)
        .contains(selected_pokemon_name)
        .contains('삭제')
    })

    it('씰 삭제 확인', () => {
      // 씰 삭제 버튼 클릭
      cy.buttonClick(MODAL.BUTTON_OK)

      // 씰 선택 안 됨
      cy.get(CEAL[`BUTTON_CEAL_${randInt}`])
        .should('not.have.class', 'selected')
    })

    it('씰 삭제시 보유수 확인', () => {
      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('0 / 159')
    })

    it('씰 모달 취소 이벤트 확인', () => {
      // 씰 클릭
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])
      cy.buttonClick(MODAL.BUTTON_CANCEL)

      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('0 / 159')
    })

    it('씰 모달 ESC 이벤트 확인', () => {
      // 씰 클릭
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])
      cy.get(MODAL.BUTTON_CANCEL)
        .type('{esc}')

      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('0 / 159')
    })

    it('씰 모달 엔터 이벤트 확인', () => {
      // 씰 클릭
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])
      cy.get(MODAL.BUTTON_OK)
        .type('{enter}')

      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('1 / 159')
    })

  })
  
  describe('버튼 활성화 확인', () => {
    before(() => {
      cy.visit('/selection')
    })

    it('씰 다 모은 경우 Complete 페이지로 이동', () => {
      Object.keys(CEAL).forEach((ceal) => {
        cy.buttonClick(CEAL[ceal])
        cy.buttonClick(MODAL.BUTTON_OK)
      })

      cy.wait(2000)
      cy.url().should('eq', `${BASE_URL}/complete`)
    })
    
    it('씰 다 모은 경우 다 모았다! 버튼 활성화', () => {
      cy.buttonClick(COMPLETE.BUTTON_HOME)
      cy.buttonClick(HOME.BUTTON_SELECTION)

      cy.get(SELECTION.BUTTON_COMPLETE).should('exist')
    })

    it('다 모았다! 버튼 클릭시 Complete 페이지로 이동', () => {
      cy.buttonClick(SELECTION.BUTTON_COMPLETE)
      cy.wait(2000)
      cy.url().should('eq', `${BASE_URL}/complete`)
    })
  })
})