// libraries
import styled from 'styled-components';

export type ButtonProps = {
	gradient?: 'blue' | 'green' | 'violet';
	size?: 'small' | 'default' | 'large';
};

export const Button = styled.button<ButtonProps>`
	font-size: ${({ size }) => {
		if (size === 'small') return '0.6em';
		if (size === 'large') return '1.2em';
		return '1em';
	}};

	color: white;
	min-width: 8em;
	height: fit-content;
	padding: 0.4em 0.4em;
	border-radius: 0.6em;
	border: solid 0.2em transparent;
	cursor: pointer;
	box-shadow: 0 0 0.6em #6666;

	${({ gradient }) => {
		if (gradient === undefined) return;
		return `
			background: linear-gradient(30deg, var(--${gradient}-primary), var(--${gradient}-bright));
			box-shadow: 0 0 0.6em var(--${gradient}-primary);	
		`;
	}}
`;
