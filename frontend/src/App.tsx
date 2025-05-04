import HeroSection from './components/Hero'
import EventIntro from './components/Event'
import Reasons from './components/Reasons'
import About from './components/About'
import AgendaTimeline from './components/Timeline'
import Speakers from './components/Speakers'
import RegistrationForm from './components/Registration'
import LocationMap from './components/Location'
import Footer from './components/Footer'
import SocialSharing from './components/Share'

export default function App () {
  return (
    <div className='min-h-screen bg-galaxy text-white'>
      <HeroSection />
      <EventIntro />
      <Reasons />
      <Speakers />
      <AgendaTimeline />
      <About />
      <RegistrationForm />
      <LocationMap />
      <Footer />
      <SocialSharing />
    </div>
  )
}
