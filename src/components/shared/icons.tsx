import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const AtIcon = () => <FontAwesomeIcon icon={faAt} />;
export const LinkedInIcon = () => <FontAwesomeIcon icon={faLinkedinIn} />;
export const GithubIcon = () => <FontAwesomeIcon icon={faGithubAlt} />;
export const RightIcon = () => <FontAwesomeIcon icon={faArrowRight} />;
export const UpIcon = () => <FontAwesomeIcon icon={faArrowUp} />;
