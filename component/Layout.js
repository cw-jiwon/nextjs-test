import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title} 22</title>
			</Head>
			<Navbar />
			{children}33
		</>
	)
}

export default Layout
