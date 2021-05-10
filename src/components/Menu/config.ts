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
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5A4755E2b4DA70a5Bb740e0E5C497393730f10bE',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Liquidity Pool',
    icon: 'FarmIcon',
    href: '/pools',
  },
  {
    label: 'Single Staking',
    icon: 'PoolIcon',
    href: '/stakes',
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
        href: 'https://kirbydefi.com/soon',
      },
      {
        label: 'Docs',
        href: 'https://kirbydefi.gitbook.io/kirby-finance/',
      },
      {
        label: 'Blog',
        href: 'https://kirbydefi.medium.com/'
      },
    ],
  },
  {
    label: 'Auto Emission Reduction Mechanism',
    icon: 'TicketIcon',
    href: 'https://kirbydefi.gitbook.io/kirby-finance/tokenomics/emission-mechanism/automatic-emission-reduction-mechanism'
  }
]

export default config
