import StyledMissingPage from '../components/styled/StyledMissingPage'

function MissingPage () {
  return (
    <div className="page-container">
      <StyledMissingPage>
      <h1>404 Page not found</h1>
        <h1 className="section-tag">Halaman yang anda cari tidak ada</h1>
      </StyledMissingPage>
    </div>
  )
}

export default MissingPage
