import React from 'react';
import NavbarHeader from './NavbarHeader'; // Make sure to adjust the path to NavbarHeader if needed

function WelcomePage () {
  return (
    <div className="welcome-background-video">
      <NavbarHeader />
    <video autoPlay muted loop className="wecole-video">
      <source src="https://vod-progressive.akamaized.net/exp=1692607350~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4993%2F17%2F449965919%2F1977816683.mp4~hmac=02aaf78207ce2d79573a592083e0ebee8cd8be28fcc303ace053a7e8edf7bba3/vimeo-prod-skyfire-std-us/01/4993/17/449965919/1977816683.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        
      <h1>Welcome to our App!</h1>
      <p>
          Are you ready to uncover the secrets the universe has in store for you? Look no further!
          [Your Site Name] is here to guide you on a cosmic journey that combines astrology, luck, and inspiration all in one place.
        </p>
        <p>
          Discover your daily horoscope tailored to your zodiac sign, providing insights into your mood, compatibility, and lucky color.
          But that's not all! Our 'Feelin' Lucky' feature adds an element of surprise to your day, giving you the option to generate a unique lucky number based on your interactions.
          You can choose to answer a set of questions, rely on your zodiac sign's lucky numbers, or even embrace the randomness of the universe.
        </p>
        <p>
          As you embark on this celestial adventure, prepare for a truly magical experience. Watch as the fortune cookie animation comes to life,
          cracking open to reveal your lucky number. Your horoscope for the day and a motivational quote will accompany this enchanting moment,
          empowering you to seize the day with positivity and enthusiasm.
        </p>
        <p>
          Whether you're a believer in the stars, seeking a dash of luck, or simply looking to start your day with a smile,
          [Your Site Name] has something special for everyone. So, sign up or log in now to immerse yourself in the world of horoscopes,
          luck, and inspiration. Let the universe guide you to a brighter and luckier tomorrow!
        </p>
    </div>
  );
};
export default WelcomePage;