import styled from 'styled-components';

export default styled.button`
    min-width: ${props => props.block ? "100%" : "160px"};
    min-height: 44px;
    padding: 1px 6px;
    display: flex;
    margin-left: .6rem;
    margin-right: 2rem;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: gray;
    background-color: rgba(0, 0, 0, 0.4);  
    color: ${props => props.outlined && props.primary ? props.theme.primaryColor : "white"};
    border-radius: 6px;
    transition: 250ms ease;
    margin-bottom: 2rem; /* Ajuste aquí */
    margin-top: ; /* Mover hacia arriba */
    cursor: pointer;
    
    &:hover {
      background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor: "#fff"};
      color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
      filter: brightness(1.1);
    }
    
    &:disabled {
      background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor: "#fff"};
      color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
      filter: brightness(1.1);
      cursor: progress;
    }
    
    @media(min-width: 768px){
      margin-bottom: 0;
      border-top-left-radius: ${props => props.icon ? "0" : "6px"};
      border-bottom-left-radius: ${props => props.icon ? "0" : "6px"};
    }
`;