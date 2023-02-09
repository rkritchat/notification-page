type pageProp = {
  img: string
  name: string
  notification: string
  post: string | null
  group: string | null
  message: string | null
  notiAt: string
  isRead: boolean
  picture: string | null
}
function Card({
  img,
  name,
  notification,
  post,
  group,
  message,
  notiAt,
  isRead,
  picture,
}: pageProp) {
  let bgColor = isRead ? 'bg-white' : 'bg-[#dde7ee]'
  return (
    <div
      className={`${bgColor} mx-4 mb-[0.56rem] rounded-[0.5rem] md:mx-[1.7rem] md:mb-[0.8rem] md:px-1 md:py-1`}
    >
      <div className='flex gap-3 py-[0.92rem] pl-4 pr-3'>
        <div className='min-w-[2.5rem]'>
          <img src={img} alt='profile-img' className='w-[2.45rem]' />
        </div>
        <div className='flex w-full justify-between'>
          <div>
            <Notification
              name={name}
              notification={notification}
              post={post}
              group={group}
              isRead={isRead}
            />
            <p className='text-sm text-[#939dae] leading-[1.45rem]'>{notiAt}</p>
            {message ? (
              <div className='text-sm p-4 border mt-[0.45rem] rounded-md md:w-[35.5rem] md:text-[1rem] cursor-pointer hover:bg-[#e5effa]'>
                <p className='leading-[1.14rem]'>{message}</p>
              </div>
            ) : null}
          </div>
          {picture && (
            <div className='w-[6rem] h-10 flex justify-end cursor-pointer'>
              <img src={picture} alt='picture' className='w-[2.5rem]' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

type notiProp = {
  name: string
  notification: string
  post: string | null
  group: string | null
  isRead: boolean
}
function Notification({ name, notification, post, group, isRead }: notiProp) {
  return (
    <div className='text-[0.875rem] leading-[0.1rem]'>
      <span className='font-bold mr-[0.45rem] cursor-pointer'>{name}</span>
      <p className='text-sm text-[#5e6778] inline leading-[1.18rem]'>
        {notification}
      </p>
      {post ? (
        <p className='ml-[0.34rem] text-[#1c202b] font-semibold relative inline leading-5 cursor-pointer'>
          {post}
        </p>
      ) : null}
      {group ? (
        <span className='ml-[0.6rem] text-[#0a317b] font-bold cursor-pointer'>
          {group}
        </span>
      ) : null}
      {isRead ? null : (
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
