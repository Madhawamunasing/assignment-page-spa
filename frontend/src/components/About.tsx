import { motion } from 'framer-motion'

export default function About () {
  return (
    <section className='py-20 bg-void'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='max-w-4xl mx-auto text-center'
        >
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-cyber to-neon bg-clip-text text-transparent'>
            About Finastra
          </h2>
          <p className='text-xl text-gray-300 mb-6'>
            Finastra is a global provider of financial services software
            applications across Lending, Payments, Treasury and Capital Markets,
            and Universal (retail and digital) Banking. Committed to unlocking
            the potential of people, businesses and communities everywhere, its
            vision is to accelerate the future of Open Finance through
            technology and collaboration, and its pioneering approach is why it
            is trusted by ~8,100 financial institutions, including 45 of the
            world's top 50 banks. <br />
            <br />
            For more information, visit www.finastra.com.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
