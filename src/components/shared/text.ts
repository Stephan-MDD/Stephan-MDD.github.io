// libraries
import styled from 'styled-components';

export type TextProps = {
	gradient?: 'blue' | 'green' | 'violet';
};

export const Text = styled.span<TextProps>`
	${({ gradient }) => {
		if (gradient === undefined) return;

		return `
			background: -webkit-linear-gradient(30deg, var(--${gradient}-primary), var(--${gradient}-bright));
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-webkit-box-decoration-break: clone;
			box-decoration-break: clone;
		`;
	}}
`;
