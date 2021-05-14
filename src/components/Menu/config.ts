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
        href: 'https://exchange.pancakeswap.finance/#/swap',
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
        label: 'Github',
        href: '/soon',
      },
      {
        label: 'Docs',
        href: '/soon',
      },
      {
        label: 'Blog',
        href: '/soon'
      },
    ],
  },
  {
    label: 'Auto Emission Reduction Mechanism',
    icon: 'InfoIcon',
    href: '/soon'
  }
]

export default config
