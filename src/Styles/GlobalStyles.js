import { createGlobalStyle } from 'styled-components';
import './Fonts/Montserrat.css';

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		line-height: 1.5;
	}

	body {
		height: 100vh;
		scroll-behavior: smooth;
	}

	#root {
		height: 100%;
	}
`;
