import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: ${(props) => props.bgColor};
    position: fixed;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    z-index: 99;
    padding: 10px 0;

    nav {
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    nav .user-profile .left { gap: 0px; }
  
    nav .user-profile .image-container { height: 40px; }
  
    nav div:last-child { display: flex; gap: 15px; }
  
    nav div .text-button { border: 1px solid #205567; padding: 7px 15px; border-radius: 7px; }
`
StyledHeader.defaultProps = {
  bgColor: '#bedecf'
}

export default StyledHeader
