import { motion } from 'framer-motion'

const timelineItems = [
  {
    time: '09:30 AM',
    title: 'Registration & Welcome Coffee',
    speaker: 'Host Team'
  },
  {
    time: '10:00 AM',
    title: 'Opening Remarks',
    speaker:
      'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking'
  },
  {
    time: '10:10 AM',
    title: 'Keynote session: <br/> Digital Transformation in a Gen AI World',
    speaker:
      'Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking'
  },
  {
    time: '10:30 AM',
    title:
      'Decoding the Future - Transformation: <br/>The Opportunity & Time is Now',
    speaker:
      "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra"
  },
  {
    time: '11:00 AM',
    title:
      'Panel Discussion - Customer Acquisition: <br/> Gaining New Customers in a Hyper Competitive World',
    speaker: `Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking
Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. “Incolease’’.
Ms. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions CEX Senior, FABMISR`
  },
  {
    time: '11:30 AM',
    title:
      'Panel Discussion - Customer Retention: <br/> Keeping Customers When Loyalty Is Dead',
    speaker: `Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking
Heba Yehia, Head of Digital Products, Arab African International Bank;
Ismail Ali, Co-Founder and CEO of CARITech
Mohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt`
  },
  { time: '12:00 PM', title: 'Coffee Break & Networking' },
  {
    time: '12:30 PM',
    title: 'Panel Discussion - Cost to Serve: <br/>Deliver Customer Delight',
    speaker: `Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking
Shehab Moustafa, Country Center of Excellence Director, Money Fellows;
Matthew Hughes, Head of FS&I, International Markets, Atos
Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.`
  },
  {
    time: '01:00 PM',
    title:
      'The Essential Elements: <br/>What do you need to be "all things to all people"?',
    speaker:
      'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking'
  },
  {
    time: '01:30 PM',
    title: 'Making the case for change: <br/>The Question is How',
    speaker:
      'Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking'
  },
  {
    time: '01:50 PM',
    title: 'Closing Remarks',
    speaker:
      'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking'
  },
  { time: '02:00 PM', title: 'Lunch' }
]

export default function AgendaTimeline () {
  return (
    <section className='py-20 bg-galaxy' id="agenda">
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-16 text-center text-cyber'>
          Event Agenda
        </h2>

        <div className='relative max-w-xl mx-auto'>
          <div className='absolute left-1/2 w-1 bg-gradient-to-b from-cyber to-neon h-full' />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`mb-12 w-full ${
                index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'
              }`}
              style={{ marginLeft: index % 2 === 0 ? 0 : '50%' }}
            >
              <div className='p-6 bg-void rounded-lg border border-cyber/20 relative'>
                <div
                  className={`absolute top-4 ${
                    index % 2 === 0 ? '-right-8' : '-left-8'
                  }`}
                >
                  <div className='w-6 h-6 bg-cyber rounded-full' />
                </div>
                <h3 className='text-2xl font-bold mb-2' dangerouslySetInnerHTML={{ __html: item.title }}/>
                <p className='text-cyber mb-2'>{item.time}</p>
                <p className='text-gray-400'>{item.speaker}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
