import { BsList } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'

export const listPath = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    icon: BsList,
  },
  {
    title: 'Balance',
    path: 'balance',
    icon: BsList,
  },
  {
    title: 'Transaction',
    path: 'transaction',
    icon: BsList,
  },
  {
    title: 'Product',
    path: 'product',
    icon: BsList,
  },
  {
    title: 'Channel',
    path: '',
    icon: BsList,
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
    icon: FiLogOut,
  },
]
