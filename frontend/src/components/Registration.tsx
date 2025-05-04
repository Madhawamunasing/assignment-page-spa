import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  message: string
}

type Registration = FormData & {
  id: string
  timestamp: string
}

export default function RegistrationForm() {
  const { register, handleSubmit, formState, reset } = useForm<FormData>()
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
      if (!data.name.trim() || !data.email.trim()) throw new Error('Missing fields')
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) throw new Error('Invalid email')

      const newRegistration: Registration = {
        ...data,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
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
    <section className="py-20 bg-galaxy" id="registration">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="max-w-2xl mx-auto bg-void p-8 rounded-2xl shadow-2xl shadow-cyber/20"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-cyber">
            Event Registration
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                {...register('name', { required: true })}
                placeholder="Full Name *"
                className="w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none"
              />
              {formState.errors.name && (
                <p className="text-red-400 mt-1">Name is required</p>
              )}
            </div>

            <div>
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="Email *"
                className="w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none"
              />
              {formState.errors.email && (
                <p className="text-red-400 mt-1">Valid email is required</p>
              )}
            </div>

            <div>
              <textarea
                {...register('message')}
                placeholder="Message"
                rows={4}
                className="w-full bg-galaxy border-2 border-cyber/30 rounded-lg p-4 text-white focus:border-cyber focus:outline-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-cyber text-galaxy py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all"
              type="submit"
            >
              Register Now
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
                {status === 'success' ? '✅ Registration successful!' : '❌ Registration failed'}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-cyber">
              Registered Participants ({registrations.length})
            </h3>
            <div className="space-y-3 max-h-40 overflow-y-auto">
              {registrations.map(reg => (
                <div 
                  key={reg.id}
                  className="p-3 bg-galaxy rounded-lg border border-cyber/20"
                >
                  <div className="font-medium">{reg.name}</div>
                  <div className="text-sm text-cyber/80">{reg.email}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}