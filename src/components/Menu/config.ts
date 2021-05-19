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
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xAAEB65fb1CF9A79ae7fB6df0610076230204f3B3',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms (V2)',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referral',
    icon: 'GroupsIcon',
    href: '/referral',
  },
  {
    label: 'Automatic Emission Reduction',
    icon: 'InfoIcon',
    href: 'https://eagleswapdefi.gitbook.io/eagleswap/features/emission-reduction'
  },
  {
    label: 'Anti Whale Feature',
    icon: 'InfoIcon',
    href: 'https://eagleswapdefi.gitbook.io/eagleswap/features/anti-whale'
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
        href: 'https://eagleswapdefi.gitbook.io/eagleswap/',
      },
      {
        label: 'Blog',
        href: 'https://eagleswap.medium.com/'
      },
    ],
  },

]

export default config
