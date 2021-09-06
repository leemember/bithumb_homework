import React, { useEffect, useState } from "react";
import axios from "axios";
// import styled from "styled-components";

const Photo = ({ photoItem }) => {
  const { title, url, id, thumbnailUrl } = photoItem;

  return (
    <div>
      {thumbnailUrl && (
        <div>
          <a href={url}>
            <img src={thumbnailUrl} alt={thumbnailUrl} />
          </a>
        </div>
      )}

      <h2>{title}</h2>
      <h3>{id}</h3>
    </div>
  );
};

export default Photo;
