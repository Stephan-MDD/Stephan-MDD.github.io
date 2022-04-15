// libraries
import styled from 'styled-components';

export type StyledHeaderProps = {
	scrolled: boolean;
	scrollOffset: number;
};

export const StyledHeader = styled.header<StyledHeaderProps>`
	box-sizing: border-box;
	padding: ${({ scrolled }) => (scrolled ? '1rem 2rem' : '1rem 2rem')};
	background-color: #fff6;
	backdrop-filter: blur(2rem);

	position: sticky;
	top: 0;
	z-index: 10;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2em;

	nav,
	ul {
		display: contents;
		list-style: none;

		a {
			font-size: 0.8rem;
			color: var(--grey-light);
			transition: all 350ms;
			font-weight: lighter;

			&.active-link {
				color: var(--blue-primary);
			}
		}
	}

	& > a {
		margin-right: auto;
		display: flex;
		align-items: center;
		color: var(--grey-light);
		font-weight: bold;
	}

	button {
		margin-left: auto;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -0.2rem;
		left: 0;
		height: 0.2rem;
		width: 100%;
		transition: all 350ms;
		background: linear-gradient(90deg, var(--blue-primary), var(--blue-bright));
		clip-path: ${({ scrollOffset }) => `polygon(0% 0%, 0% 100%, ${scrollOffset}% 100%, ${scrollOffset}% 0%);`};
	}

	@media only screen and (max-width: 720px) {
		padding: 2rem 2rem;

		nav {
			display: none;
		}

		&::after {
			top: 0rem;
		}
	}
`;
