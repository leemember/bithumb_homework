import React from "react";

const Photo = ({ id, title, url, thumbnailUrl }) => {
  return (
    <div>
      <p>
        <img src={thumbnailUrl} alt={title} height="150" />
      </p>
      <p>영화명 : {title}</p>
      <p>장르 : {id}</p>
      <p>개봉년도 : {url}년</p>
    </div>
  );
};

export default Photo;
