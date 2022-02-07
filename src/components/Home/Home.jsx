import React from 'react';
import PrevVideo from '../../assets/uefa-intro.mp4';

const Home = () => {
  React.useEffect(() => {}, []);
  return (
    <div>
      {/* Home */}
      <video className="intro-video" autoPlay controls id="video">
        <source src={PrevVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export { Home };
