import { useEffect, useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { NotiContext } from './context/Notification'

function App() {
  const { state } = useContext(NotiContext)
  return (
    <main className='h-screen md:h-[60rem] bg-[#f7fafd] w-full flex'>
      <div className='flex flex-col md:items-center md:pt-[4.5rem] md:px-[23.3rem] h-screen'>
        <div className='bg-white pt-4 px-4 rounded-md'>
          <Navbar />
          {state.data.map((e, i) => (
            <Card key={i} noti={e} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
