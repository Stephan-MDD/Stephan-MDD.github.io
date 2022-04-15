// libraries
import styled from 'styled-components';

// components
import { Main } from '../../shared/composites/main';

export const StyledHome = styled(Main)`
	.contact-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.8em;

		font-size: 1.8rem;
		width: fit-content;
		grid-area: contact;

		a {
			color: var(--grey-light);
			transition: all 350ms;

			:hover {
				color: var(--blue-primary);
			}
		}
	}

	.caption-container {
		position: relative;
		padding: 1.4em;
		height: fit-content;
		width: min-content;
		grid-area: caption;
		align-self: end;

		h1 {
			width: 18ch;
		}

		::before,
		::after {
			content: '';
			position: absolute;
			border: 2px solid var(--blue-light);
			height: 4em;
			width: 6em;
			opacity: 0.4;
		}

		::before {
			top: 0;
			right: 0;
			clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
		}

		::after {
			bottom: 0em;
			left: 0em;
			clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
		}
	}

	.action-container {
		grid-area: actions;
		display: flex;
		gap: 2rem;
		align-items: center;
		align-self: start;
	}

	.logo-container {
		grid-area: logo;
		align-self: center;

		svg {
			width: 100%;
		}
	}

	#welcome {
		display: grid;
		gap: 4rem;
		grid-template-columns: auto 1fr 1fr;
		grid-template-areas:
			'contact caption logo'
			'contact actions logo';

		@media only screen and (max-width: 720px) {
			gap: 2rem;
			grid-template-columns: auto;
			grid-template-areas:
				'caption'
				'logo'
				'contact'
				'actions';
		}
	}

	#about-me {
		display: grid;
		display: flex;
		flex-direction: column;
		gap: 0;

		align-items: center;

		.profile-container {
			margin-top: auto;
			height: 65%;
			place-self: end;

			img {
				height: 100%;
			}
		}

		.info-container {
			width: 85%;
			text-align: center;
			font-size: 1.6rem;
			font-weight: bold;
			margin-bottom: auto;
			color: var(--blue-dark);
		}

		.map-container {
			opacity: 0.6;
			height: 100%;
			position: absolute;
			top: 50%;

			transform: translate(-25%, -50%);
			z-index: -10;

			svg {
				height: 100%;
			}
		}

		@media only screen and (max-width: 720px) {
			.map-container {
				svg {
					height: 65%;
				}
			}
		}
	}

	#higer-education {
		display: grid;

		
	}

	@media only screen and (max-width: 720px) {
		.contact-container {
			flex-direction: row;
			font-size: 2.4rem;
			gap: 1em;
		}

		.caption-container {
			text-align: center;
			width: fit-content;

			h1 {
				width: auto;
			}

			::before,
			:after {
				display: none;
			}
		}
	}
`;
