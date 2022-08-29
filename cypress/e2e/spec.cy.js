
describe('Sample spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get(".search-keyword").type("ca")
    cy.get(".products").find('.product').each(($ele,index,$list)=>{
      const textName= $ele.find("h4.product-name").text()
      if(textName.includes("Cashews")){
        $ele.find('button').click()
      }
    })
  })
})