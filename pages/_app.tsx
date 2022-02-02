import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute='class'>
			<div className='grid grid-cols-12 gap-6 px-5 sm:px-10 md:px-24 lg:px-10 xl:px-48 py-14 lg:py-40 lg:max-w-[1700px] lg:mx-auto lg:h-screen'>
				<div className='col-span-12 lg:col-span-3 bg-white dark:bg-dark-500 rounded-2xl p-4 text-center shadow-custom-light dark:shadow-custom-dark'>
					<Sidebar/>
				</div>
				<div className='col-span-12 lg:col-span-9 bg-white dark:bg-dark-500 rounded-2xl flex flex-col overflow-hidden shadow-custom-light dark:shadow-custom-dark'>
					<Navbar/>
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route}/>
					</AnimatePresence>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default MyApp
