import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: forestgreen;
`;

const Score = styled.div`
  font-weight: bold;
  position: relative;
  right: 1vw;
  width: 13vw;
  background-color: white;
  border-radius: 8px;
  border: 3px solid #262722;
`;

const CardGroup = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 16px;
  background-color: green;
  border-radius: 8px;
  padding: 16px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 3px solid #262722;
  border-radius: 10px;
  width: 125px;
  margin: 0.25rem auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px;
  flex: 1;
  &:hover {
    transform: ${props => props.isPlayer ? 'translateY(-10px)' : 'none'};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 21vh;
  flex: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 16vw;
  flex: 1;
  padding: 8px;
`;

// need to change min-height and min-width

export { Layout, Score, CardGroup, CardContainer, CardImage, Row, Column };