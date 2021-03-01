import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${p => p.theme.background};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10rem;

	.img
	{
		width: 90vw;
		max-width: 50rem;
	}

	ul
	{
		display: flex;
		flex-direction: column;
		gap: 1rem;

		width: 75vw;
		max-width: 30rem;

		a
		{
			width: 100%;
			padding: 1rem 0.25rem;
			text-align: center;

			background-color: ${p => p.theme.primary};
			color: ${p => p.theme.background};

			font-family: Ubuntu;
			font-weight: 700;
			font-size: 2rem;
			text-decoration: none;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			border-radius: 1rem;
			transition: 0.25s;

			:hover
			{
				transform: scale(1.05);
				border-radius: 0;
			}

			h1
			{
				font-size: 2rem;
			}

			h2
			{
				font-size: 1rem;
			}
		}
	}
`

export default Container