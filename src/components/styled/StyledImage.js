import styled from 'styled-components'

const StyledImage = styled.div`
    width: 50px; 
    height: 50px; 
    border-radius: 50%; 
    
    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
        object-fit: contain;
    }
    
`
export default StyledImage
