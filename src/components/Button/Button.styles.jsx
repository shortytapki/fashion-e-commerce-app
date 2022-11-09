import styled from 'styled-components';

export const BaseButton = styled.button`
  width: 165px;
  height: 70px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;

// .button-container {

//   &.google-sign-in {

//   }

// }
