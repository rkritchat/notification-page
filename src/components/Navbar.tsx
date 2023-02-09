function Navbar() {
  return (
    <section className='flex justify-between items-center mx-4 my-[1.36rem] md:mb-[1.97rem]'>
      <div className='flex gap-[0.54rem] items-center'>
        <h1 className='font-[800] text-[20px] md:text-[24px]'>Notifications</h1>
        <div className='px-[0.73rem] rounded-[0.4rem] bg-[#0a317b] flex items-center'>
          <p className='text-white text-[1rem] font-bold pb-[0.1rem]'>3</p>
        </div>
      </div>
      <p className='text-[#5e6778] text-sm md:text-[0.95rem] cursor-pointer'>
        Mark all as read
      </p>
    </section>
  )
}

export default Navbar
