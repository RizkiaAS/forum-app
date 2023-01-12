import styled from 'styled-components'

const SytledContectWrapper = styled.div`
    background-color: ${props => props.bgColor};
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    border-bottom: 1px solid #d4dce0;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    ${props => props.hoverEffect && '&:hover {filter: brightness(90%);}'}

    .post-body p, .post-body h1{ font-size: 115%; }
`
SytledContectWrapper.defaultProps = {
  bgColor: 'white',
  hoverEffect: false,
  marginBottom: '0px',
  marginTop: '0px'

}

export default SytledContectWrapper
