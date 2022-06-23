import { CEAL, SELECTION, MODAL, HOME, COMPLETE, MEDAL } from '../../dataset'
import { medals } from '../../fixtures/medal.json'
import { pokemons } from '../../fixtures/pokemon.json'

// NOTE: 기기별로 화면 비율 지정해서 e2e 테스트도 가능. ex) iphone-6
describe('띠부띠부씰 선택 화면', () => {
  const BASE_URL = Cypress.config().baseUrl

  const moveToCollection = () => {
    cy.buttonClick(SELECTION.BUTTON_PREVIEW)
    cy.buttonClick(HOME.BUTTON_COLLECTION)
  }

  const moveToSelection = () => {
    cy.buttonClick(SELECTION.BUTTON_PREVIEW)
    cy.buttonClick(HOME.BUTTON_SELECTION)
  }

  describe('버튼 클릭', () => {
    before(() => {
      cy.visit('/collection')
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

    it('테스트 케이스를 위한 씰 추가', () => {
      // 씰 선택 안 됨
      cy.get(CEAL[`BUTTON_CEAL_${randInt}`])
        .should('not.have.class', 'selected')

      // 씰 클릭
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])

      // 씰 정보 확인
      cy.get(MODAL.MESSAGE_CONTENT)
        .contains(selected_pokemon_name)
        .contains('추가')

      // 씰 추가 버튼 클릭
      cy.buttonClick(MODAL.BUTTON_OK)

      // 씰 선택 됨
      cy.get(CEAL[`BUTTON_CEAL_${randInt}`])
        .should('have.class', 'selected') 
    })

    it('씰 추가시 보유수 확인', () => {
      moveToCollection()

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

    
    it('씰 모달 취소 이벤트 확인', () => {
      cy.buttonClick(MODAL.BUTTON_CANCEL)

      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('1 / 159')
    })

    it('씰 모달 ESC 이벤트 확인', () => {
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])
      cy.get(MODAL.BUTTON_CANCEL)
        .type('{esc}')

      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('1 / 159')
    })

    it('씰 삭제 확인', () => {
      // 씰 삭제 버튼 클릭
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])
      cy.buttonClick(MODAL.BUTTON_OK)

      // 보관함에서 씰 삭제
      cy.get(CEAL[`BUTTON_CEAL_${randInt}`])
        .should('not.exist')
    })

    it('씰 삭제시 보유수 확인', () => {
      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('0 / 159')
    })

    it('씰 모달 엔터 이벤트 확인', () => {
      moveToSelection()
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])
      cy.buttonClick(MODAL.BUTTON_OK)

      moveToCollection()
      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('1 / 159')
      
      // 씰 클릭
      cy.buttonClick(CEAL[`BUTTON_CEAL_${randInt}`])
      cy.get(`.pokemon-list-layout ${MODAL.BUTTON_OK}`)
        .type('{enter}')

      cy.get(SELECTION.LABEL_NUMBER_OF_POKEMONS)
        .contains('0 / 159')
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
      cy.buttonClick(HOME.BUTTON_COLLECTION)

      cy.get(SELECTION.BUTTON_COMPLETE).should('exist')
    })

    it('다 모았다! 버튼 클릭시 Complete 페이지로 이동', () => {
      cy.buttonClick(SELECTION.BUTTON_COMPLETE)
      cy.wait(2000)
      cy.url().should('eq', `${BASE_URL}/complete`)
    })
  })


  describe('메달 확인', () => {
    const checkMedal = (code, isExist) => {
      moveToCollection()
      cy.get(code).should(isExist ? 'exist' : 'not.exist')
      moveToSelection()
    }

    before(() => {
      cy.visit('/selection')
    })

    it('메달 보유 확인', () => {
      checkMedal(MEDAL.BUTTON_MEDAL_1, false)

      Object.keys(CEAL).forEach((ceal, idx) => {
        const count = idx + 1
        cy.buttonClick(CEAL[ceal])
        cy.buttonClick(MODAL.BUTTON_OK)
        if (count === 1) checkMedal(MEDAL.BUTTON_MEDAL_1, true)
        
        if (count === 3) checkMedal(MEDAL.BUTTON_MEDAL_2, false)
        if (count === 4) checkMedal(MEDAL.BUTTON_MEDAL_2, true)

        if (count === 9) checkMedal(MEDAL.BUTTON_MEDAL_3, false)
        if (count === 10) checkMedal(MEDAL.BUTTON_MEDAL_3, true)

        if (count === 29) checkMedal(MEDAL.BUTTON_MEDAL_4, false)
        if (count === 30) checkMedal(MEDAL.BUTTON_MEDAL_4, true)

        if (count === 59) checkMedal(MEDAL.BUTTON_MEDAL_5, false)
        if (count === 60) checkMedal(MEDAL.BUTTON_MEDAL_5, true)

        if (count === 89) checkMedal(MEDAL.BUTTON_MEDAL_6, false)
        if (count === 90) checkMedal(MEDAL.BUTTON_MEDAL_6, true)

        if (count === 119) checkMedal(MEDAL.BUTTON_MEDAL_7, false)
        if (count === 120) checkMedal(MEDAL.BUTTON_MEDAL_7, true)

        if (count === 146) checkMedal(MEDAL.BUTTON_MEDAL_8, false)
        if (count === 147) checkMedal(MEDAL.BUTTON_MEDAL_8, true)

        if (count === 158) checkMedal(MEDAL.BUTTON_MEDAL_9, false)
        if (count === 158) checkMedal(MEDAL.BUTTON_MEDAL_10, false)
        if (count === 159) {
          cy.buttonClick(COMPLETE.BUTTON_HOME)
          cy.buttonClick(HOME.BUTTON_COLLECTION)

          cy.get(MEDAL.BUTTON_MEDAL_9).should('exist')
          cy.get(MEDAL.BUTTON_MEDAL_10).should('exist')
        }
      })
    })

    it('메달 정보 확인', () => {
      Object.keys(MEDAL).forEach((medal, idx) => {
        const info = medals.filter(m => m.id === idx + 1)[0]

        cy.buttonClick(MEDAL[medal])
        cy.get(`.medal-list-layout ${MODAL.MESSAGE_TITLE}`).contains(info.name)
        cy.get(`.medal-list-layout ${MODAL.MESSAGE_CONTENT}`).contains(info.content)
      })
    })
  })

})
