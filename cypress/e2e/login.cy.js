/**
 * Skenario
 *
 * - LoginPage spec:
 *   - harus menampilkan login page dengan benar
 *   - harus menampilkan alert saat kolom nama belum diisi
 *   - harus menampilkan alert saat kolom Password belum diisi
 *   - harus menampilkan alert saat Email atau Password salah
 *   - harus menavigasikan kembali ke halaman awal dan menampilkan nama User saat Email dan Password benar
 */

describe('LoginPage spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  it('harus menampilkan login page dengan benar', () => {
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Password"]').should('be.visible')
    cy.get('button').contains(/^Login$/).should('be.visible')
  })

  it('harus menampilkan alert saat kolom Email belum diisi', () => {
    cy.get('button').contains(/^Login$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty')
    })
  })

  it('harus menampilkan alert saat kolom Password belum diisi', () => {
    cy.get('input[placeholder="Email"]').type('orangAneh@gmail.com')

    cy.get('button').contains(/^Login$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty')
    })
  })

  it('harus menampilkan alert saat Email atau Password salah', () => {
    cy.get('input[placeholder="Email"]').type('orangAneh@gmail.com')

    cy.get('input[placeholder="Password"]').type('wokawokawok')

    cy.get('button').contains(/^Login$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong')
    })
  })

  it('harus menavigasikan kembali ke halaman awal dan menampilkan nama User saat Email dan Password benar', () => {
    const user = 'umi'
    const mail = '@gmail.com'
    cy.get('input[placeholder="Email"]').type(user + mail)

    cy.get('input[placeholder="Password"]').type('umiumi')

    cy.get('button').contains(/^Login$/).click()

    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('p').contains('Umi').should('be.visible')
  })
})
