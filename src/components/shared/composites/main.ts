// libraries
import styled from 'styled-components';

export type MainProps = {
	headerHeight: number;
};

export const Main = styled.main<MainProps>`
	section {
		min-height: calc(100vh - ${({ headerHeight }) => headerHeight}px);
		scroll-snap-align: start;

		&:nth-child(even) {
			background-color: white;
		}
	}
`;
