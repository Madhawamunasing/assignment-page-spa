import {
  Lightbulb,
  LineChart,
  Users,
  GraduationCap,
  MessageCircle,
  BarChart3,
  Users2
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function Reasons () {
  return (
    <section className='min-h-screen bg-galaxy flex items-center justify-center relative'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='max-w-4xl mx-auto text-center'
        >
          <h2 className='text-2xl font-bold mt-8 mb-8 bg-gradient-to-r from-cyber to-neon bg-clip-text text-transparent'>
            TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN
            2025
          </h2>
          <div className='grid md:grid-cols-3 gap-8 mt-12'>
            {[
              {
                icon: <Lightbulb className='w-8 h-8 text-cyber' />,
                title: 'Learn from industry experts'
              },
              {
                icon: <BarChart3 className='w-8 h-8 text-cyber' />,
                title: 'Stay ahead of emerging trends'
              },
              {
                icon: <Users2 className='w-8 h-8 text-cyber' />,
                title: 'Connect with fellow banking professionals'
              },
              {
                icon: <GraduationCap className='w-8 h-8 text-cyber' />,
                title: 'Enhance your knowledge, skills, and network'
              },
              {
                icon: <MessageCircle className='w-8 h-8 text-cyber' />,
                title: 'Share your expertise and experience with peers'
              }
            ].map((item, index) => (
              <div
                key={index}
                className='p-6 bg-galaxy rounded-xl border border-cyber/20 flex flex-col items-center text-center'
              >
                {item.icon}
                <h3 className='text-2xl font-bold mt-4 text-cyber'>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
