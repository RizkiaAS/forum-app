import styled from 'styled-components'

const StyledForm = styled.div`
    padding: 0 20px 0 20px; 
    margin-bottom: 50px; 
    
    form { display: flex; flex-direction: column; gap: 15px; }
    form input { height: 34px; padding-left: 10px; outline: none; }
    form button { height: 34px; }
    form button:hover { transform: scale(101%); cursor: pointer; }
    form button:active { filter: brightness(80%); transform: translateY(2px); }
`
export default StyledForm
