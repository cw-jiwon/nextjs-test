import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
	const [list, setList] = useState()
	function getData() {
		Axios.get(API_URL).then(res => {
			console.log(res)
		})
	}

	useEffect(() => {
		getData()
	}, [])
	return (
		<div>
			<Head>
				<title>지원 테스트</title>
			</Head>
		</div>
	)
}
