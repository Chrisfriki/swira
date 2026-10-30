export type Reel = {
  id: string
  title: string
  category: string
  src: string
  poster: string
  instagramUrl: string
}

export const REELS: Reel[] = [
  {
    id: 'sushitok', title: 'Sushi Tok', category: 'Campaña de Halloween',
    src: '/video/reels/sushitok.mp4', poster: '/video/reels/sushitok.jpg',
    instagramUrl: 'https://www.instagram.com/p/DfDBs2aR1JG/',
  },
  {
    id: 'inku', title: 'Inku Sushi', category: 'Campaña de Halloween',
    src: '/video/reels/inku.mp4', poster: '/video/reels/inku.jpg',
    instagramUrl: 'https://www.instagram.com/p/DfEwJPDCoSi/',
  },
  {
    id: 'alcacenter', title: 'Alcacenter', category: 'Reel de marca',
    src: '/video/reels/alcacenter.mp4', poster: '/video/reels/alcacenter.jpg',
    instagramUrl: 'https://www.instagram.com/p/DdI79mpiBmo/',
  },
]
