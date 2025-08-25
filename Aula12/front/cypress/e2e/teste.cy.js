describe('Testes da interface inicial', () => {
  it('Acessar página Home', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Home').click();
    cy.url().should('include', '/');
  })
})

describe('Testes do cadastro de Livro', () => {
  it('Acessar página Home', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Adicionar Livro').click();
    cy.url().should('include', '/livro/adicionar');
    cy.get('input[name="titulo"]').type('Livro Teste 2025',{delay: 100 });
    cy.get('input[name="autor"]').type('Autor Teste', { delay: 100 });
    cy.get('input[name="ano_publicacao"]').type('2024', { delay: 100 });  
    cy.get('select[name="genero"]').select('Fantasia', { delay: 100 });
    cy.get('input[name="preco"]').type('49.90', { delay: 100 });
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.contains('Livro Teste 2025').should('exist');
  })
})

describe()

