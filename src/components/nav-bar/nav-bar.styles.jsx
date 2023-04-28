import styled from 'styled-components';

export const NavBarContainer = styled.div`
  background: rgba(255, 224, 224, 1);
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  font-family: 'Castoro Titling';
  font-weight: 800;
  padding: 0 20px;
`;

export const ThemeToggle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & label {
    position: relative;
    top: 1px;
  }
`;
