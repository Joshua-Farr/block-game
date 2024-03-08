import styled from "styled-components";

interface BlockProps {
  color: string;
}

const StyledBlock = styled.div`
  border: 3px solid black;

  &:hover {
    cursor: pointer;
    border: 4px solid green;
  }
`;

const handleDoubleClick = (color: string) => {
  window.alert(`You have double clicked a ${color} block!`);
  console.log("You have double clicked!");
};

export const Block = ({ color }: BlockProps) => {
  console.log(`Creating a block of color: ${color}`);

  return (
    <StyledBlock onDoubleClick={() => handleDoubleClick(color)}></StyledBlock>
  );
};
