import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import Photo from "./components/Photo";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => setPhotos(data));
  }, []);

  console.log(photos);

  return (
    <main>
      <Title>😊 현주의 컬러 박스 모음집 🎁</Title>
      <Container>
        <GlobalStyle />

        {photos.map((photo, index) => (
          <Photo
            key={index}
            id={photo.id}
            title={photo.title}
            thumbnailUrl={photo.thumbnailUrl}
          />
        ))}
      </Container>
    </main>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  //배경색깔
  background: #d9a7c7;
  background: -webkit-linear-gradient(to right, #fffcdc, #d9a7c7);
  background: linear-gradient(to right, #fffcdc, #d9a7c7);
  box-sizing: border-box;
  }
`;

const Container = styled.div`
  height: 100%;
  padding: 3em;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 40px;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  margin-top: 2em;
`;

export default App;
