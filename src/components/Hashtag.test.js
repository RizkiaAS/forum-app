/**
 * skenario testing
 *
 * Hashtag component :
 * - harus memilki class "blue" yang menandakan kategori ini aktif jika diberikan props isActive dengan nilai True
 * - harus merender kategori yang dikirim melalui props
 */
import { render } from '@testing-library/react'
import Hashtag from './Hashtag'

describe('Hashtag Component', () => {
  it('harus memilki class "blue" yang menandakan kategori ini aktif jika diberikan props isActive dengan nilai True', async () => {
    // Arrange
    const dummyCategory = 'Kategori palsu'
    const dummyFunction = () => {}
    render(<Hashtag content={dummyCategory} changeCategoryFun={dummyFunction} isActive={true}/>)

    // Action
    // no action needed for this tes

    // Assert
    expect('bluee').toBeInTheDocument
  })

  it('harus merender kategori yang dikirim melalui props', async () => {
    // Arrange
    const dummyCategory = 'Kategori palsu'
    const dummyFunction = () => {}
    render(<Hashtag content={dummyCategory} changeCategoryFun={dummyFunction} isActive={true}/>)

    // Action
    // no action needed for this tes

    // Assert
    expect(dummyCategory).toBeInTheDocument
  })
})
