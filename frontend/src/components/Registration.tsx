import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'

type FormData = {
  firstName: string
  lastName: string
  jobTitle: string
  company: string
  mobile: string
  email: string
  website: string
  acceptTerms: boolean
}

type Registration = FormData & {
  id: string
  timestamp: string
}

export default function RegistrationForm () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Load existing registrations
  useEffect(() => {
    const saved = localStorage.getItem('registrations')
    if (saved) setRegistrations(JSON.parse(saved))
  }, [])

  // Save to localStorage when registrations change
  useEffect(() => {
    localStorage.setItem('registrations', JSON.stringify(registrations))
  }, [registrations])

  const onSubmit = (data: FormData) => {
    try {
      const newRegistration: Registration = {
        ...data,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      }

      setRegistrations(prev => [...prev, newRegistration])
      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section className='py-20 bg-galaxy' id='registration'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className='max-w-3xl mx-auto bg-void p-8 rounded-2xl shadow-2xl shadow-cyber/20'
        >
          <h2 className='text-4xl font-bold text-center text-cyber'>
            Event Registration
          </h2>
          <h4 className='text-2xl font-bold mb-8 text-center text-cyber'>
            Join us for an unforgettable experience!
          </h4>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <input
                  {...register('firstName', { required: true })}
                  placeholder='First Name *'
                  className='w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none'
                />
                {errors.firstName && (
                  <p className='text-red-400 mt-1'>First name is required</p>
                )}
              </div>

              <div>
                <input
                  {...register('lastName', { required: true })}
                  placeholder='Last Name *'
                  className='w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none'
                />
                {errors.lastName && (
                  <p className='text-red-400 mt-1'>Last name is required</p>
                )}
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <input
                  {...register('jobTitle', { required: true })}
                  placeholder='Job Title *'
                  className='w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none'
                />
                {errors.jobTitle && (
                  <p className='text-red-400 mt-1'>Job title is required</p>
                )}
              </div>

              <div>
                <input
                  {...register('company', { required: true })}
                  placeholder='Company *'
                  className='w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none'
                />
                {errors.company && (
                  <p className='text-red-400 mt-1'>Company is required</p>
                )}
              </div>
            </div>

            <div>
              <input
                {...register('mobile', {
                  required: true,
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Invalid mobile number'
                  }
                })}
                placeholder='Mobile Number *'
                className='w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none'
              />
              {errors.mobile && (
                <p className='text-red-400 mt-1'>
                  {errors.mobile.message || 'Mobile number is required'}
                </p>
              )}
            </div>

            <div>
              <input
                type='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder='Email Address *'
                className='w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none'
              />
              {errors.email && (
                <p className='text-red-400 mt-1'>{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type='url'
                {...register('website', {
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                    message: 'Invalid website URL'
                  }
                })}
                placeholder='Company Website URL'
                className='w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none'
              />
              {errors.website && (
                <p className='text-red-400 mt-1'>{errors.website.message}</p>
              )}
            </div>

            <div className='flex items-start space-x-3'>
              <input
                type='checkbox'
                id='acceptTerms'
                {...register('acceptTerms', { required: true })}
                className='mt-1 w-5 h-5 text-cyber bg-galaxy border-2 border-cyber rounded focus:ring-cyber'
              />
              <label htmlFor='acceptTerms' className='text-gray-400 text-sm'>
                By filling out the registration form to attend our event, you
                agree and consent to{' '}
                <a href='#' className='text-cyber hover:underline'>
                  Cogent Solutions Privacy Policy
                </a>
              </label>
              {errors.acceptTerms && (
                <p className='text-red-400 mt-1'>You must accept the terms</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full bg-cyber text-galaxy py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all'
              type='submit'
            >
              Register
            </motion.button>
          </form>

          <AnimatePresence>
            {status !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mt-4 p-4 rounded-lg ${
                  status === 'success'
                    ? 'bg-cyber/10 text-cyber'
                    : 'bg-red-400/10 text-red-400'
                }`}
              >
                {status === 'success'
                  ? '✅ Registration successful!'
                  : '❌ Registration failed'}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      {/* <div className='mt-8'>
        <h3 className='text-xl font-bold mb-4 text-cyber'>
          Registered Participants ({registrations.length})
        </h3>
        <div className='space-y-3 max-h-40 overflow-y-auto'>
          {registrations.map(reg => (
            <div
              key={reg.id}
              className='p-3 bg-galaxy rounded-lg border border-cyber/20'
            >
              <div className='font-medium'>
                {reg.firstName} {reg.lastName}
              </div>
              <div className='text-sm text-cyber/80'>
                {reg.jobTitle} at {reg.company}
              </div>
              <div className='text-sm text-cyber/60'>
                {reg.email} | {reg.mobile}
              </div>
              {reg.website && (
                <div className='text-sm text-cyber/60'>
                  Website: {reg.website}
                </div>
              )}
            </div>
          ))}
        </div>
      </div> */}
    </section>
  )
}
