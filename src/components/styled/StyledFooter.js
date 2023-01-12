import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: #bedecf;
    position: fixed;
    width: 100%;
    top: 100%;
    transform: translateY(-50px);
    
    nav ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        gap: 10px;
        z-index: 99999;
    }
`
export default StyledFooter
