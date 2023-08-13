describe("Home Page", () => {
  it("Deve carregar mais postagens quando o botão 'Ver mais' for clicado", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Hot").click();

    cy.get("[data-cy-post]").should("exist");

    cy.get("[data-cy-ver-mais]").click();
    cy.get("[data-cy-ver-mais]").click();

    cy.get("[data-cy-post]").should("have.length", 30);
  });
});
