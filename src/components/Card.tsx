import { useContext } from 'react'
import { Noti, NotiContext } from '../context/Notification'

type pageProp = {
  noti: Noti
}
function Card({ noti }: pageProp) {
  const { dispatch } = useContext(NotiContext)
  const handleNoti = () => {
    if (noti.isRead === true) {
      return
    }
    dispatch({ type: 'MARK_READ', payload: noti.name })
  }
  return (
    <div
      className={`${
        noti.isRead ? 'bg-white ' : 'bg-[#dde7ee] '
      } mx-4 mb-[0.56rem] rounded-[0.5rem] md:mx-[1.7rem] md:mb-[0.8rem] md:px-1 md:py-1 cursor-pointer`}
      onClick={handleNoti}
    >
      <div className='flex gap-3 py-[0.92rem] pl-4 pr-3'>
        <div className='min-w-[2.5rem]'>
          <img src={noti.img} alt='profile-img' className='w-[2.45rem]' />
        </div>
        <div className='flex w-full justify-between'>
          <div>
            <Notification noti={noti} />
            <p className='text-sm text-[#939dae] leading-[1.45rem]'>
              {noti.notiAt}
            </p>
            {noti.message ? (
              <div className='text-sm p-4 border mt-[0.45rem] rounded-md md:w-[35.5rem] md:text-[1rem] cursor-pointer hover:bg-[#e5effa]'>
                <p className='leading-[1.14rem]'>{noti.message}</p>
              </div>
            ) : null}
          </div>
          {noti.picture && (
            <div className='w-[6rem] h-10 flex justify-end cursor-pointer'>
              <img src={noti.picture} alt='picture' className='w-[2.5rem]' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

type notiProp = {
  noti: Noti
}
function Notification({ noti }: notiProp) {
  return (
    <div className='text-[0.875rem] leading-[0.1rem]'>
      <span className='font-bold mr-[0.45rem] cursor-pointer'>{noti.name}</span>
      <p className='text-sm text-[#5e6778] inline leading-[1.18rem]'>
        {noti.notification}
      </p>
      {noti.post ? (
        <p className='ml-[0.34rem] text-[#1c202b] font-semibold relative inline leading-5 cursor-pointer'>
          {noti.post}
        </p>
      ) : null}
      {noti.group ? (
        <span className='ml-[0.6rem] text-[#0a317b] font-bold cursor-pointer'>
          {noti.group}
        </span>
      ) : null}
      {noti.isRead ? null : (
        <div className='w-1 h-[0.1rem] rounded-full inline'>
          <p className='inline bg-red-500 absolute w-2 h-2 rounded-full mt-[0.47rem] ml-[0.35rem] text-red-500'>
            .
          </p>
        </div>
      )}
    </div>
  )
}

export default Card
