// libraries
import { useEffect, useRef, useState } from 'react';

// resources
import { StyledHeader } from './header.styled';

// components
import { Button } from '../shared/button';
import { Logo } from '../shared/logo';

let timeout: NodeJS.Timeout;

export type HeaderProps = {
	scrolled: boolean;
	setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
};

export function Header(props: HeaderProps): JSX.Element {
	const [scrollOffset, setScrollOffset] = useState<number>(0);
	const headerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const header: HTMLElement | null = headerRef.current;
		if (header === null) return;

		const headerHeight: number = header.offsetHeight;
		props.setHeaderHeight(headerHeight);
	}, [props]);

	useEffect(() => {
		const rootContainer: HTMLElement | null = document.getElementById('root');
		if (rootContainer === null) return;

		function handleScroll(rootContainer: HTMLElement): void {
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				const offsetHeight: number = rootContainer.offsetHeight;
				const scrollHeight: number = rootContainer.scrollHeight;
				const scrollOffset: number = rootContainer.scrollTop;

				const maxScrollOffset: number = scrollHeight - offsetHeight;
				setScrollOffset((scrollOffset / maxScrollOffset) * 100);
			}, 50);
		}

		rootContainer.addEventListener('scroll', () => handleScroll(rootContainer));
		return () => rootContainer.removeEventListener('scroll', () => handleScroll(rootContainer));
	}, []);

	useEffect(() => {
		const sections: NodeListOf<Element> = document.querySelectorAll('main > section');

		function intersectionCallback(entries: IntersectionObserverEntry[]): void {
			const [entry]: IntersectionObserverEntry[] = entries;

			if (entry.isIntersecting) {
				const targetId: string = entry.target.id;
				const links: NodeListOf<Element> = document.querySelectorAll('nav > ul a');

				links.forEach((link: Element) => {
					const href: string | null = link.getAttribute('href');

					if (href !== null && href.includes(targetId)) {
						link.classList.add('active-link');
					} else {
						link.classList.remove('active-link');
					}
				});
			}
		}

		const observer: IntersectionObserver = new window.IntersectionObserver(intersectionCallback, {
			root: null,
			threshold: 0.15,
		});

		sections.forEach((section: Element) => {
			observer.observe(section);
		});
	}, []);

	function handleOpenMain(): void {
		window.location.assign('mailto:stephan-mdd@gmail.com');
	}

	return (
		<StyledHeader ref={headerRef} scrollOffset={scrollOffset} scrolled={props.scrolled}>
			<a href="/">
				<Logo />
				<span>SMDD</span>
			</a>

			<nav>
				<ul>
					<li>
						<a href="#welcome">Welcome</a>
					</li>

					<li>
						<a href="#about-me">About Me</a>
					</li>

					<li>
						<a href="#higher-education">Higher Education</a>
					</li>
				</ul>
			</nav>

			<Button onClick={handleOpenMain} size="small" gradient="green">
				Get in touch
			</Button>
		</StyledHeader>
	);
}
