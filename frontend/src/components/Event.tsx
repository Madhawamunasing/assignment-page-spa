import { motion } from 'framer-motion'

export default function EventIntro () {
  return (
    <section className='py-20 bg-void' id="overview">
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='max-w-4xl mx-auto text-center'
        >
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-cyber to-neon bg-clip-text text-transparent'>
            About the Event
          </h2>
          <p className='text-xl text-gray-300 mb-6'>
            Join us on April 9th in Cairo, Egypt, for Finastra's Universal
            Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This
            exclusive event is designed to help you navigate and excel in the
            rapidly evolving banking landscape. <br />
            <br />
            Our forum will bring together business and technology experts,
            industry leaders, and visionaries to share their insights on the
            latest trends and challenges in the banking sector. You'll gain
            valuable knowledge on topics such as Generative AI, the impact of
            volatility, globalization challenges, persistent supply chain
            issues, recession threats, shifts in competitive dynamics, and
            evolving regulations. <br />
            <br />
            Each session will delve into the implications, challenges, and
            opportunities these topics present, providing you with practical
            strategies to leverage the latest technologies and capitalize on
            emerging opportunities. This is a unique chance to learn from the
            best in the industry, stay ahead of the curve, and connect with
            fellow retail banking professionals. <br />
            <br />
            Don't miss this opportunity to enhance your knowledge, skills, and
            network in the finance and banking sector. Register today and secure
            your place at this must-attend event!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
