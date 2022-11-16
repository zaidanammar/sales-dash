import { BsList, BsBag, BsDiagram2 } from 'react-icons/bs'
import { TbLayoutGrid } from 'react-icons/tb'
import { RiWalletLine, RiLogoutBoxRLine } from 'react-icons/ri'
import { GrTransaction } from 'react-icons/gr'

export const listPath = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    icon: TbLayoutGrid,
  },
  {
    title: 'Balance',
    path: 'balance',
    icon: RiWalletLine,
  },
  {
    title: 'Transaction',
    path: 'transaction',
    icon: GrTransaction,
  },
  {
    title: 'Product',
    path: 'product',
    icon: BsBag,
  },
  {
    title: 'Channel',
    path: '',
    icon: BsDiagram2,
    subMenu: [
      {
        title: 'Agent',
        path: 'channel/agent',
        icon: BsList,
      },
      {
        title: 'Balance',
        path: 'channel/balance',
        icon: BsList,
      },
      {
        title: 'Transaction',
        path: 'channel/transaction',
        icon: BsList,
      },
    ],
  },
  {
    title: 'Logout',
    path: 'login',
    icon: RiLogoutBoxRLine,
  },
]
