import styled from 'styled-components'

const StyledProfileContainer = styled.section`
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    .left { display: flex; gap: 10px; align-items: center; }
    .left div.top { display: flex; gap: 7px; }
    .left div.top p:first-child { font-weight: bold; }

    .leaderboard & { padding: 15px; border-bottom: 1px solid #d4dce0; }
    .leaderboard &:hover { background-color: rgb(243, 242, 242); }
`
export default StyledProfileContainer
