/* 접근 권한 확인 */
Cypress.Commands.add('checkAccess', (url, isAuth) => {
  cy.visit(url)

  if (isAuth) cy.url().should('include', url)
  else cy.url().should('not.include', url)
})

/* 버튼 클릭 */
Cypress.Commands.add("buttonClick", (name, option = { multiple: true, force: true }) => {
  return cy.get(name).click(option)
})