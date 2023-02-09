import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const data = [
    {
      img: '/avatar-mark-webber.webp',
      name: 'Mark Webber',
      notification: 'reacted to your recent post',
      post: 'My first tournament today!',
      group: null,
      message: null,
      notiAt: '1m ago',
      isRead: false,
      picture: null,
    },
    {
      img: '/avatar-angela-gray.webp',
      name: 'Angela Gray',
      notification: 'followed you',
      post: null,
      group: null,
      message: null,
      notiAt: '5m ago',
      isRead: false,
      picture: null,
    },
    {
      img: '/avatar-jacob-thompson.webp',
      name: 'Jacob Thompson',
      notification: 'has joined your group',
      post: null,
      group: 'Chess Club',
      message: null,
      notiAt: '1 day ago',
      isRead: false,
      picture: null,
    },
    {
      img: '/avatar-rizky-hasanuddin.webp',
      name: 'Rizky Hasanuddin',
      notification: 'sent you a private message',
      post: null,
      group: null,
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      notiAt: '5 days ago',
      isRead: true,
      picture: null,
    },
    {
      img: '/avatar-kimberly-smith.webp',
      name: 'Kimberly Smith',
      notification: 'commented on your picture',
      post: null,
      group: null,
      message: null,
      notiAt: '1 week ago',
      isRead: true,
      picture: '/image-chess.webp',
    },
    {
      img: '/avatar-nathan-peterson.webp',
      name: 'Nathan Peterson',
      notification: 'reacted to your recent post',
      post: '5 end-game strategies to increase your win rate',
      group: null,
      message: null,
      notiAt: '2 weeks ago',
      isRead: true,
      picture: null,
    },
    {
      img: '/avatar-anna-kim.webp',
      name: 'Anna Kim',
      notification: 'left the group',
      post: null,
      group: 'Chess Club',
      message: null,
      notiAt: '2 weeks ago',
      isRead: true,
      picture: null,
    },
  ]
  return (
    <main className='h-screen md:h-[60rem] bg-[#f7fafd] w-full flex'>
      <div className='flex flex-col md:items-center md:pt-[4.5rem] md:px-[23.3rem] h-screen'>
        <div className='bg-white pt-4 px-4 rounded-md'>
          <Navbar />
          {data.map((e, i) => (
            <Card
              img={e.img}
              name={e.name}
              notification={e.notification}
              post={e.post}
              group={e.group}
              message={e.message}
              notiAt={e.notiAt}
              isRead={e.isRead}
              picture={e.picture}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
