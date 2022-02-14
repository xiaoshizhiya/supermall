const Home = () => import('../view/home')
const Sort = () => import('../view/sort')
const Cart = () => import('../view/cart')
const My = () => import('../view/my')
const Detail = () => import('../view/detail')

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail
  }
]

export default routes