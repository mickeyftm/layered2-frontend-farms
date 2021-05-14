import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x6a7E5F05869da5e8eFe6Cbb5D3E5a9BeC7669CD8',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Light Yagami',
    icon: 'FarmIcon',
    href: '/yagami',
  },
  {
    label: 'Ryuk',
    icon: 'PoolIcon',
    href: '/ryuk',
  },
  {
    label: 'Refer a Friend',
    icon: 'GroupsIcon',
    href: '/referral',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://deathnotefinance.gitbook.io/deathnote-finance/',
      },
      {
        label: 'Blog',
        href: 'https://deathnotefinance.medium.com/'
      },
    ],
  },
  {
    label: 'Automatic Emission Reduction',
    icon: 'InfoIcon',
    href: 'https://deathnotefinance.gitbook.io/deathnote-finance/auto-emission-reduction-protocol'
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://deathnotefinance.gitbook.io/deathnote-finance/faq/roadmap'
  },
]

export default config
