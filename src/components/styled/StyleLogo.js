import styled from 'styled-components'

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: ${props => props.color};
`
StyledLogo.defaultProps = {
  color: '#205567'
}

export default StyledLogo
