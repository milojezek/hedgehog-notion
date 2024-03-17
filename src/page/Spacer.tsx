import styled from "styled-components";

const SpacerContainer = styled.div`
  height: 200px;
	width: 100%;
	padding: 0 46px;
	color: grey;
`;

type SpacerProps = {
  handleClick(): void;
  showHint: boolean;
};

export const Spacer = ({ handleClick, showHint }: SpacerProps) => {
  return (
    <SpacerContainer onClick={handleClick}>
      {showHint && "Click to create the first paragraph."};
    </SpacerContainer>

  );
};