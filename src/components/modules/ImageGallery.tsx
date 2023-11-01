import React from "react";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function Gallery({ galleryImages }: any) {
  const transformedImages = galleryImages.map((image: any) => ({
    original: image.url,
    thumbnail: image.url,
  }));

  return (
    <>
      <div>
        <ImageGallery
          items={transformedImages}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    </>
  );
}

export default Gallery;
