import { createContext, useReducer } from 'react'

export interface Notification {
  data: Noti[]
}

export interface Noti {
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

export interface NotificationInterface {
  state: Notification
  dispatch: React.Dispatch<any>
}

const data: Noti[] = [
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

export const NotiContext = createContext<NotificationInterface>({
  state: { data },
  dispatch: () => null,
})

interface Action {
  type: string
  payload: string
}

const reducer = (state: Notification, action: Action) => {
  let payload = action.payload
  switch (action.type) {
    case 'MARK_READ_ALL':
      state.data.forEach((e) => (e.isRead = true))
      return { ...state }
    case 'MARK_READ':
      const data = state.data
      data.map(function (e) {
        if (e.name == payload) {
          e.isRead = true
        }
        return e
      })
      return { ...state, data }
  }
  return state
}

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(reducer, { data })
  const value = { state, dispatch }
  return <NotiContext.Provider value={value}> {children}</NotiContext.Provider>
}
