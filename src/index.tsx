// libraries
import { createRoot } from 'react-dom/client';
import '@fontsource/orbitron';
import '@fontsource/roboto';

import * as serviceWorkerRegistration from './services/service-worker-registration';
import reportWebVitals from './services/report-web-vitals';

// resources
import { Router } from './components/navigation/router';
import './styles/variables.css';
import './styles/composite.css';
import './styles/typography.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Router />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
