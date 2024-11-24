import Navbar from './components/NavBar';
import HeroSection from './components/Hero';
import TrustedSection from './components/Cta';
import AchievementsSection from './components/Archivement';
import Courses from './components/Courses';
import TeamSection from './components/Team';
import Footer from './components/Footer';
import Services from './components/Services';
import Testimonals from './components/Testimonal';
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedSection/>
      <Services/>
      <AchievementsSection/>
      <Courses/>
      <TeamSection/>
      <Testimonals/>
      <Footer/>
      
    </>
  );
};

export default Home;