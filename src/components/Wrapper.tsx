import styled from "styled-components";

const StyledWrapper = styled.div`
  border: 6px solid red;
  height: 100vh;
  padding: 1.5rem;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

export const Wrapper = ({ children }: any) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
