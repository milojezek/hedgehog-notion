import styled from "styled-components";

const CoverContainer = styled.div`
  position: relative;
  height: 295px;
  border-bottom: 2px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChangeButton = styled.button`
  position: absolute;
	bottom: 20px;
	right: 90px;
	padding: 6px;
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
	background: white;
	border: 2px solid #888;
	border-radius: 4px;
	color: #6f6f6f;
	font-weight: bold;
	cursor: pointer;
`;


export const Cover = () => {

  return (
    <CoverContainer>
      <img />
      <ChangeButton>Change cover</ChangeButton>
      <input type="file" />
    </CoverContainer>
  );
};