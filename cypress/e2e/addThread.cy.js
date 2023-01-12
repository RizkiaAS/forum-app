/**
 * Skenario
 *
 * - AddThread spec:
 *   - Tidak menampilan form melainkan menampilkan "Ingin membuat thread ? silahkan login dahulu" saat user belum login
 *   - harus menampilkan form untuk menambah thread dengan benar jika user sudah login
 *   - harus menampilkan alert ketika judul thread belum disii
 *   - harus menampilkan alert ketika isi atau body thread belum disii
 *   - Thread yang ditampilkan harus bertambah dengan thread yang baru setelah aksi AddThread ini berhasil dilakukan
*/

describe('AddThread spec', () => {
  it('Tidak menampilan form melainkan menampilkan "Ingin membuat thread ? silahkan login dahulu" saat user belum login', () => {
    // login aplikasi
    cy.visit('http://localhost:3000/')

    // memastikan form untuk menambah thread tampil dengan benar
    cy.get('.ask-and-link').contains('Ingin membuat thread ? silahkan login dahulu').should('be.visible')
  })

  it('harus menampilkan form untuk menambah thread dengan benar jika user sudah login', () => {
    // login terlebih dahulu
    cy.visit('http://localhost:3000/login')
    const user = 'umi'
    const mail = '@gmail.com'
    cy.get('input[placeholder="Email"]').type(user + mail)
    cy.get('input[placeholder="Password"]').type('umiumi')
    cy.get('button').contains(/^Login$/).click()

    // memastikan user telah terlogin
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('p').contains('Umi').should('be.visible')

    // memastikan form untuk menambah thread tampil dengan benar
    cy.get('input[placeholder="Title"]').should('be.visible')
    cy.get('input[placeholder="Tag"]').should('be.visible')
    cy.get('.text-form').should('be.visible')
    cy.get('button').contains(/^Post$/).should('be.visible')
  })

  beforeEach(() => {
    // login terlebih dahulu
    cy.visit('http://localhost:3000/login')
    const user = 'umi'
    const mail = '@gmail.com'
    cy.get('input[placeholder="Email"]').type(user + mail)
    cy.get('input[placeholder="Password"]').type('umiumi')
    cy.get('button').contains(/^Login$/).click()

    // memastikan user telah terlogin
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('p').contains('Umi').should('be.visible')
  })

  it('harus menampilkan alert ketika judul thread belum disii', () => {
    // mengklik tombol input
    cy.get('button').contains(/^Post$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"title" is not allowed to be empty')
    })
  })

  it('harus menampilkan alert ketika isi atau body thread belum disii', () => {
    // mengisi title dn menginputkan
    cy.get('input[placeholder="Title"]').type('sBuah Judul')
    cy.get('button').contains(/^Post$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"body" is not allowed to be empty')
    })
  })

  it('Thread yang ditampilkan harus bertambah dengan thread yang baru setelah aksi AddThread ini berhasil dilakukan', () => {
    // mengisi dan menginputkan
    const title = 'Belajar sipres'
    cy.get('input[placeholder="Title"]').type(title)
    cy.get('input[placeholder="Tag"]').type('SIPRESSPRIDE')
    cy.get('.text-form').type('ini adalah sebuah percobaan untuk menambahkan thread menggunakan sipres')
    cy.get('button').contains(/^Post$/).click()

    // mengisi title
    cy.get('input[placeholder="Title"]').type('sBuah Judul')

    // memeriksa apakah thread baru tsb telah ditampilkan
    cy.get('.post-body').should('have.descendants', 'h1').contains('h1', title)
  })
})
