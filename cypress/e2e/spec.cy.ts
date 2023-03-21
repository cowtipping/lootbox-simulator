export {}; // appeases typescript

describe("loot button", () => {
  it("should start with 5 boxes, click the loot box button 6 times and have 10 boxes left over", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".box-count")
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase()).to.include("loot boxes left: 5");
      });
    for (let i = 0; i < 6; i++) {
      cy.get("button").first().click();
    }
    cy.get(".box-count")
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase()).to.include("loot boxes left: 10");
      });
  });
});
