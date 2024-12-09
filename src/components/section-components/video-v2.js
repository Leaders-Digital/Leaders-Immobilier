import React, { useState } from 'react';

const VideoV2 = () => {
  const videoCollection = [
    'https://www.youtube.com/embed/2YmZT4_N72E',
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center mt-30">
            <iframe
              width="100%"
              height="500px"
              src={videoCollection[0]}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoV2;
