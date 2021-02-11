import styled from 'styled-components/native';

export const TableWrapper = styled.View`
  padding: 3px;
  background-color: #2b1210;
  height: 350px;
  width: 350px;
  border-radius: 175px;
  margin-bottom: 60px;
`;

export const TableImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 175px;
`;

export const TableContentWrapper = styled.View`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  position: absolute;
`;

export const TableContent = styled.View`
  height: 100%;
  width: 100%;
  position: relative;
`;
