// resources
import { StyledFallback } from './fallback.styled';

// components
import { MainProps } from '../../shared/composites/main';

export function FallbackView(props: MainProps): JSX.Element {
	return (
		<StyledFallback {...props}>
			<h1>not found</h1>;
		</StyledFallback>
	);
}
