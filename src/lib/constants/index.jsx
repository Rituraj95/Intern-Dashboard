import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'payy',
		label: 'Payouts',
		path: '/payy',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'CreateProduct',
		label: 'CreateProduct',
		path: '/CreateProduct',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'ProductHighlight',
		label: 'ProductHighlight',
		path: '/ProductHighlight',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'order',
		label: 'Reward',
		path: '/order',
		icon: <HiOutlineShoppingCart />
	},
	
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	
]
