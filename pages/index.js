import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>지원 테스트</title>
			</Head>
			<h1 className='title'>
				Read{' '}
				<Link href='/posts/first-post'>
					<a>this page!</a>
				</Link>
			</h1>
		</div>
	)
}
