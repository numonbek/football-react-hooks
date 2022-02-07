import React from 'react';
import UefaIntro from '../../assets/uefa-intro.mp4';

const BackgroundVideo = () => {
  return (
    <React.Fragment>
      <video className="bg-video" autoPlay loop muted id="video">
        <source src={UefaIntro} type="video/mp4" />
      </video>
    </React.Fragment>
  );
};

export { BackgroundVideo };
