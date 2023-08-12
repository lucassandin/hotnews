describe("Home Page", () => {
  it("Deve carregar postagens quando os botões são clicados", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Hot").click();

    cy.get("[data-cy-post]").should("exist");

    cy.contains("News").click();

    cy.get("[data-cy-post]").should("exist");

    cy.contains("Rising").click();

    cy.get("[data-cy-post]").should("exist");

    cy.contains("Ver mais").click();

    cy.get("[data-cy-post]").should("exist");
  });
});
