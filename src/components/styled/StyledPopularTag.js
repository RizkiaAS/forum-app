import styled from 'styled-components'

const StyledPopularTag = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;

    .tag { background-color: white; color: #205567; }

    .tag { padding: 3px; border: 1px solid #205567; border-radius: 7px; }
    
    .tag:hover {
        filter: brightness(80%) drop-shadow(-1px 1px 1px rgb(70, 70, 70));
        transform: translate(2px,-2px);
        cursor: pointer;
    }
    
    .tag:active { filter: none; transform: translate(-2px,2px); }

    .blue { color: white; background-color: #205567; }

    @media only screen and (min-width:720px) {
        flex-direction: row; 
        width: 100%;
    }
    
`
export default StyledPopularTag
