// resources
import { StyledHome } from './home.styled';
import profileImage from '../../../assets/profile.png';

// components
import { MainProps } from '../../shared/composites/main';
import { Section } from '../../shared/composites/section';
import { Text } from '../../shared/text';
import { Logo } from '../../shared/logo';
import { Button } from '../../shared/button';
import { AtIcon, GithubIcon, LinkedInIcon, RightIcon } from '../../shared/icons';
import { MapDK } from '../../shared/dk-map';

export function HomeView(props: MainProps): JSX.Element {
	function handleOpenMain(): void {
		window.location.assign('mailto:stephan-mdd@gmail.com');
	}

	return (
		<StyledHome {...props}>
			<Section id="welcome">
				<div className="contact-container">
					<a href="https://github.com/Stephan-MDD" target="_blank" rel="noreferrer">
						<GithubIcon />
					</a>
					<a href="https://www.linkedin.com/in/stephan-duelund-djurhuus" target="_blank" rel="noreferrer">
						<LinkedInIcon />
					</a>
					<a href="mailto:stephan-mdd@gmail.com">
						<AtIcon />
					</a>
				</div>

				<div className="caption-container">
					<h1>
						LES'T CREATE <Text gradient="blue">AWESOME</Text> TECH <Text gradient="green">TOGETHER!</Text>
					</h1>
					<h4>
						<span>Passionated software developer, with a love to new and cutting edge technologies.</span>
						<br />
						<span>- Ready for exploration.</span>
					</h4>
				</div>

				<div className="action-container">
					<Button onClick={handleOpenMain} size="large" gradient="green">
						Get in touch
					</Button>
					<a href="/#about-me">
						Explore more <RightIcon />
					</a>
				</div>

				<div className="logo-container">
					<Logo />
				</div>
			</Section>

			<Section id="about-me">
				<h2>
					<Text gradient="blue">About</Text> Me
				</h2>

				<div className="profile-container">
					<img src={profileImage} alt="profile" />
				</div>
				<div className="info-container">
					<h3>
						<Text gradient="blue">STEPHAN M. D. DJURHUUS</Text>
					</h3>
					<h4>Hi my name is Stephan - I'm a danish software developer living north from Copenhagen.</h4>
				</div>

				<div className="map-container">
					<MapDK />
				</div>
			</Section>

			<Section id="higher-education">
				<h2>
					<Text gradient="blue">Higher</Text> Education
				</h2>

				<div className="card-container">
					<div className="">test</div>
					<div className="">test</div>
				</div>
			</Section>
		</StyledHome>
	);
}
