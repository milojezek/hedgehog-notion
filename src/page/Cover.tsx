import { ChangeEventHandler, useRef } from "react";
import styled from "styled-components";

const CoverContainer = styled.div`
  position: relative;
  height: 295px;
  border-bottom: 2px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoverButton = styled.button`
  position: absolute;
	bottom: 20px;
	right: 90px;
	padding: 6px;
	transition: opacity 0.2s ease-in-out;
	background: white;
	border: 2px solid #888;
	border-radius: 4px;
	color: #6f6f6f;
	font-weight: bold;
	cursor: pointer;
  
  &:hover {
    border-color: black;
    color: black;
  }
`;

const CoverImage = styled.img`
  width: 100%;
	max-height: 295px;
	object-fit: cover;
`;


export const Cover = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onChangeCoverImage = () => {
    fileInputRef.current?.click();
  };

  const onCoverImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target;
    console.log(target?.files?.[0]);
  };


  return (
    <CoverContainer>
      <CoverImage src="/notisbok-cover.png" alt="Cover" />
      <CoverButton onClick={onChangeCoverImage}>
        Change cover
      </CoverButton>
      <input onChange={onCoverImageUpload} style={{ display: "none" }} ref={fileInputRef} type="file" />
    </CoverContainer>
  );
};