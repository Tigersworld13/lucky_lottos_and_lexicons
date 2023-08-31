import React from 'react';
import NavbarHeader from './NavbarHeader'; // Make sure to adjust the path to NavbarHeader if needed
import TimeLapse from '../assets/TimeLapse.mp4';


function WelcomePage () {
  return (
    <div className="welcome-background-video">
      {/* <NavbarHeader /> */}
    <video autoPlay muted loop className="welcome-video">
      <source src= {TimeLapse} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="welcome-text-container">  
      <h1>Welcome to our App!</h1>
      <p>
          Are you ready to uncover the secrets the universe has in store for you? Look no further!
          Luck, Lexicons and Lotto is here to guide you on a cosmic journey that combines astrology, luck, and inspiration all in one place.
        </p>
        <p>
          Discover your daily horoscope tailored to your zodiac sign, providing insights into your mood, compatibility, and lucky number.
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
          Luck, Lexicons and Lotto has something special for everyone. So, sign up or log in now to immerse yourself in the world of horoscopes,
          luck, and inspiration. Let the universe guide you to a brighter and luckier tomorrow!
        </p>
    </div>
    </div>
  );
};
export default WelcomePage;