// libraries
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// resources
import { Aside } from './aside';
import { Footer } from './footer';
import { Header } from './header';

// views
import { FallbackView } from '../views/fallback/fallback';
import { HomeView } from '../views/home/home';

export function Router(): JSX.Element {
	const [scrolled, setScrolled] = useState<boolean>(true);
	const [headerHeight, setHeaderHeight] = useState<number>(0);

	// useEffect(() => {
	// 	const rootContainer: HTMLElement | null = document.getElementById('root');
	// 	if (rootContainer === null) return;

	// 	function handleScroll(rootContainer: HTMLElement): void {
	// 		const windowHeight: number = window.innerHeight;
	// 		const scrollOffset: number = rootContainer.scrollTop;
	// 		const scrolled: boolean = scrollOffset > windowHeight / 2;
	// 		setScrolled(scrolled);
	// 	}

	// 	rootContainer.addEventListener('scroll', () => handleScroll(rootContainer));
	// 	return () => rootContainer.removeEventListener('scroll', () => handleScroll(rootContainer));
	// }, []);

	return (
		<>
			<BrowserRouter>
				<Header scrolled={scrolled} setHeaderHeight={setHeaderHeight} />
				<Routes>
					<Route path="/" element={<HomeView headerHeight={headerHeight} />} />
					<Route path="*" element={<FallbackView headerHeight={headerHeight} />} />
				</Routes>
				<Footer />
				<Aside />
			</BrowserRouter>
		</>
	);
}
