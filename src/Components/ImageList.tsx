import React from "react";

interface IReceiveProps {
  images: Array<any>;
}

const ImageList: React.SFC<IReceiveProps> = props => {
  const images = props.images.map(image => {
    return (
      <img
        key={image.id}
        src={image.urls.regular}
        height="500"
        width="500"
        alt={image.description}
      />
    );
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
