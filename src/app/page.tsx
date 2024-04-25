import Image from 'next/image';
import Hero from '../../components/dashboard/landingpage/hero/Hero';
import WelcomePG from '../../components/dashboard/landingpage/WelcomePG';

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomePG />
    </>
  );
}
