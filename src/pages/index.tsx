import About from '@app/components/sections/About/About';
import Contact from '@app/components/sections/Contact/Contact';
import Live from '@app/components/sections/Live/Live';
import MusicSection from '@app/components/sections/MusicSection/MusicSection';
import Videos from '@app/components/sections/Videos/Videos';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Live />
      <About />
      <MusicSection />
      <Videos />
      <Contact />
    </>
  );
};

export default Home;
