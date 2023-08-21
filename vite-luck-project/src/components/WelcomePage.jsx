import React from 'react';

export const Welcome = () => {
  return (
    <div className="welcome-background-video">
    <video autoPlay muted loop className="wecole-video">
      <source src="https://vod-progressive.akamaized.net/exp=1692607350~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4993%2F17%2F449965919%2F1977816683.mp4~hmac=02aaf78207ce2d79573a592083e0ebee8cd8be28fcc303ace053a7e8edf7bba3/vimeo-prod-skyfire-std-us/01/4993/17/449965919/1977816683.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        
      <h1>Welcome to our App!</h1>
      <p>This is the welcome page of our app.</p>
    </div>
  );
};
