import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./components/Photo";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhotos(response.data.photos);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //대기중 일때

  if (loading) {
    return <h3>로딩중...</h3>;
  }

  //아직 photos 값이 설정되지 않았을 때

  if (!photos) {
    return null;
  }

  return (
    <>
      {photos.map((photo) => {
        <Photo key={photo.id} />;
      })}
    </>
  );
};

export default App;
