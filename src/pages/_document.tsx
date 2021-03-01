import React from 'react'
import Document, {DocumentInitialProps, DocumentContext, Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document
{
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>
	{
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage
		
		try
		{
			ctx.renderPage = () => originalRenderPage(
			{
				enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
			})
				
			const initialProps = await Document.getInitialProps(ctx)
			return {...initialProps, styles: (
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>
			)}
		}
		finally
		{
			sheet.seal()
		}
	}
			
	render(): JSX.Element
	{
		return (
			<Html lang='pt-br'>
				<Head>
					<meta charSet='utf-8' />
					<link rel='icon' href='/favicon.svg' />
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&family=Ubuntu:wght@400;700'
						rel='stylesheet'
					/>

					<meta name='robots' content='index, follow' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}