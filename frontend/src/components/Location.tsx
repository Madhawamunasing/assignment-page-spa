export default function LocationMap () {
  return (
    <section className='py-20 bg-galaxy'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-12 text-center text-cyber'>
          Event Location
        </h2>

        <div className='rounded-2xl overflow-hidden border-2 border-cyber/20'>
          <iframe
            title='The Nile Ritz-Carlton, Cairo'
            src='https://maps.google.com/maps?q=The%20Nile%20Ritz-Carlton,%20Cairo&t=&z=15&ie=UTF8&iwloc=&output=embed'
            width='100%'
            height='450'
            className='border-0 rounded-2xl'
            allowFullScreen
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}
