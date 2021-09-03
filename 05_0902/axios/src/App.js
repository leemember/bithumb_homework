import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import Photo from "./components/Photo";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhoto] = useState(null);

  useEffect(() => {
    const setPhotoData = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhoto(res.data.photos);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    setPhotoData();
  }, []);

  // 대기중 일 때
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // 아직 Photo 값이 설정되지 않았을 때
  if (!photos) {
    return null;
  }

  // Photo 값이 유효할 때
  return (
    <div>
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          title={photo.title}
          url={photo.url}
          img={photo.thumbnailUrl}
        />
      ))}
    </div>
  );
}

export default App;
