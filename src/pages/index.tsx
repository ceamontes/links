import Image from 'next/image'
import Head from 'next/head'

import Container from '../styles/pages/index'
import logo from '../assets/logo.svg'

const Links: React.FC = () =>
{
  return (
		<Container>
			<Head>
				<title>Links | CEAMONTES</title>
			</Head>

			<div className='img'>
				<Image src={logo} width={1000} height={350} priority />
			</div>
			<ul>
				<a href='https://forms.gle/sGjdDs88GTZwUx1T8'>
					2ª Semana Astronômica (pesquisa)
				</a>
			</ul>
		</Container>
	)
}

export default Links