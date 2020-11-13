describe("Form tests", () => {
    beforeEach(() => {
      // arbitrary code you want running before your tests start: setup
      cy.visit("http://localhost:3000/pizza");
    });

    const nameInput = () => cy.get('input[name="name"]');
    const checkboxs = [
      () => cy.get('input[name="pepperoni"]'),
      () => cy.get('input[name="onions"]'),
      () => cy.get('input[name="pineapple"]'),
      () => cy.get('input[name="sausage"]'),
    ]
    const submitForm = () => cy.get('form');

    it("Initial test", () => {
      expect(1 + 2).to.equal(3);
    })

    const name ="Lary";

    it("Name form test", () => {
      
      nameInput()
        .should("exist")
        .type(name)
        .should("have.value", name);

    });

    it("Toppings checkbox test", () => {

      checkboxs.forEach(checkbox => {
        checkbox().check().should('be.checked');
      });

    });

    it("Submit form test", () => {

      submitForm().submit();

    })
});