import React from "react";
import styled from "styled-components";

const Photo = ({ title, id, thumbnailUrl }) => {
  return (
    <Post>
      <Title>
        <p>{id}</p>
        <h4>{title}</h4>
      </Title>
      <Body>
        <img src={thumbnailUrl} alt={id} />
      </Body>
    </Post>
  );
};

export default Photo;

const Post = styled.div`
  border: 1px solid #262626;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  background: #fff;
  h4 {
    font-weight: 500;
  }
  p {
    margin-right: 5px;
    font-weight: 500;
  }
`;

const Title = styled.div`
  height: 20%;
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  height: 70%;
  padding: 10px;
  text-align: center;
  img {
    width: 100%;
  }
`;
