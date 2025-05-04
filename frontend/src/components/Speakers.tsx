import { motion } from 'framer-motion'

const speakers = [
  {
    name: 'Mr. Mohamed Elazzazy',
    role: 'Head of IT Governance and Change Management <br/> Al-Baraka Bank Egypt',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png'
  },
  {
    name: 'Mr. Shehab Moustafa',
    role: 'Country Center of Excellence Director <br/> Money Fellows',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg'
  },
  {
    name: 'Mr. Marwan Abouzeid',
    role: 'Principal Solutions Consultant & Customer Value Lead, MEA & APAC <br/> Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/3s.jpg'
  },
  {
    name: 'Mr. Karim El Mourabet',
    role: 'Solution Consulting Director - MEA <br/> Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/4s.jpg'
  },
  {
    name: 'Ms. Siobhan Byron',
    role: 'Executive Vice President, Universal Banking <br/> Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/5s.jpg'
  },
  {
    name: 'Mr. Narendra Mistry',
    role: 'Chief Product and Technology Officer Universal Banking <br/> Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/6s.jpg'
  },
  {
    name: 'Mr. Ahmed Hamdy Bahey El Din',
    role: 'Head of Information Technology <br/> Incolease',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/7s.png'
  },
  {
    name: 'Mr. Emad Shawky Habib Hanna',
    role: 'Chief Data and Analytics Officer <br/> Banque Misr',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/8s.png'
  },
  {
    name: 'Mike Ms. Heba Yehia',
    role: 'Head of Digital Products <br/> Arab African International Bank',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/9s.jpg'
  },
  {
    name: 'Mr. Hamid Nirouzad',
    role: 'Managing Director - Africa <br/>  Finastra Universal',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/10s.jpg'
  },
  {
    name: 'Mr. Rudy Kawmi',
    role: 'Managing Director - Middle East, Africa & Asia-Pacific <br/>  Finastra Universal Banking',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/11s.jpg'
  },
  {
    name: 'Mr. Matthew Hughes',
    role: 'Head of FS&I, International Markets <br/> Atos',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/12s.jpg'
  },
  {
    name: `Mr. Daragh O'Byrne`,
    role: 'Senior Director, Marketing, Universal Banking <br/> Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/13s.JPG'
  },
  {
    name: 'Dr. Ismail Ali',
    role: 'Co-Founder <br/> CEO of CARITech',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/14s.jpg'
  },
  {
    name: 'Ms. Riham Muhammad',
    role: 'Corporate CEX Senior Analyst <br/> FABMISR',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/15s.png'
  }
]

export default function Speakers () {
  return (
    <section className='py-20 bg-void'>
      <div className='container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
        <h2 className='text-4xl font-bold mb-16 text-center text-cyber'>
          Our Speakers
        </h2>

        <div className='grid md:grid-cols-4 gap-10'>
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className='text-center'
            >
              <div className='relative group mb-6'>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className='w-full h-80 object-cover rounded-2xl border-2 border-cyber/20 group-hover:border-cyber transition-all'
                />
                <div className='absolute inset-0 bg-cyber/0 group-hover:bg-cyber/10 transition-all' />
              </div>
              <h3 className='text-2xl font-bold mb-2'>{speaker.name}</h3>
              <p className='text-gray-400' dangerouslySetInnerHTML={{ __html: speaker.role }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
