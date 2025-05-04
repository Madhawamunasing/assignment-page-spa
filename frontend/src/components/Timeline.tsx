import { motion } from 'framer-motion'

const timelineItems = [
  {
    time: '09:30 AM',
    title: 'Registration & Welcome Coffee',
    speakers: ['Host Team']
  },
  {
    time: '10:00 AM',
    title: 'Opening Remarks',
    speakers: [
      'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking'
    ]
  },
  {
    time: '10:10 AM',
    title: 'Keynote session: <br/> Digital Transformation in a Gen AI World',
    speakers: [
      'Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking'
    ]
  },
  {
    time: '10:30 AM',
    title:
      'Decoding the Future - Transformation: <br/>The Opportunity & Time is Now',
    speakers: [
      "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra"
    ]
  },
  {
    time: '11:00 AM',
    title:
      'Panel Discussion - Customer Acquisition: <br/> Gaining New Customers in a Hyper Competitive World',
    speakers: [
      `Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking
Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. “Incolease’’.
Ms. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions CEX Senior, FABMISR`
    ]
  },
  {
    time: '11:30 AM',
    title:
      'Panel Discussion - Customer Retention: <br/> Keeping Customers When Loyalty Is Dead',
    speakers: [
      `Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking
Heba Yehia, Head of Digital Products, Arab African International Bank;
Ismail Ali, Co-Founder and CEO of CARITech
Mohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt`
    ]
  },
  { time: '12:00 PM', title: 'Coffee Break & Networking', speakers: [] },
  {
    time: '12:30 PM',
    title: 'Panel Discussion - Cost to Serve: <br/>Deliver Customer Delight',
    speakers: [
      `Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking
Shehab Moustafa, Country Center of Excellence Director, Money Fellows;
Matthew Hughes, Head of FS&I, International Markets, Atos
Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.`
    ]
  },
  {
    time: '01:00 PM',
    title:
      'The Essential Elements: <br/>What do you need to be "all things to all people"?',
    speakers: [
      'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking'
    ]
  },
  {
    time: '01:30 PM',
    title: 'Making the case for change: <br/>The Question is How',
    speakers: [
      'Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking'
    ]
  },
  {
    time: '01:50 PM',
    title: 'Closing Remarks',
    speakers: [
      'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking'
    ]
  },
  { time: '02:00 PM', title: 'Lunch', speakers: [] }
]

export default function AgendaTimeline () {
  return (
    <section className='py-12 md:py-20 bg-galaxy' id='agenda'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center text-cyber'>
          Event Agenda
        </h2>

        <div className='max-w-4xl mx-auto'>
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className='flex flex-col md:flex-row gap-4 items-center md:items-start mb-8 md:mb-12'
            >
              {/* Time */}
              <div className='text-cyber text-sm md:text-base font-medium md:w-32 text-center md:text-right'>
                {item.time}
              </div>

              {/* Content Card */}
              <div className='bg-void p-4 md:p-6 rounded-lg border border-cyber/20 max-w-2xl w-full'>
                <h3
                  className='text-lg md:text-xl font-bold mb-2 text-center md:text-left'
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                {/* Speakers */}
                <div className='space-y-2'>
                  {item.speakers.map((speaker, i) => (
                    <div key={i} className='flex items-start'>
                      <span className='text-cyber mr-2 text-xs md:text-sm'>
                        •
                      </span>
                      <span className='text-gray-400 text-sm md:text-base'>
                        {speaker}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
