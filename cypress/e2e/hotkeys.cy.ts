describe("Home Page", () => {
  it("Deve carregar postagens quando o botão 'Hot' é clicado", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Hot").click();

    cy.get("[data-cy-post]").should("exist");
  });

  it("Deve carregar postagens quando o botão 'News' é clicado", () => {
    cy.visit("http://localhost:3000");

    cy.contains("News").click();

    cy.get("[data-cy-post]").should("exist");
  });

  it("Deve carregar postagens quando o botão 'Rising' é clicado", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Rising").click();

    cy.get("[data-cy-post]").should("exist");
  });
});
