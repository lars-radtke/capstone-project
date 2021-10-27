import { createGlobalStyle } from 'styled-components';
import './Fonts/Montserrat.css';

const GlobalStyles = createGlobalStyle`
	:root {
		--white: rgba(255,255,255,1);
		--grey: rgba(210,210,210,1);
		--black: rgba(15,15,15,1);
		--red: rgba(209,0,38,1);
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		line-height: 1.5;
		font-family: 'Montserrat', Arial, Helvetica, sans-serif;
		scroll-behavior: smooth;
	}

	body {
		height: 100vh;
		
		background-image: linear-gradient(#0077b6, #b9e6ff);
		background-repeat: no-repeat;
		 overflow: hidden;
		
	}

	#root {
		height: 100%;
	}

	button {
		border: none;

		font-size: 16px;
		font-weight: 500;
		white-space: nowrap;
		color: var(--black);

		opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
		pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

		transition: 0.3s;

		background-color: ${({ highlighted }) =>
            highlighted ? 'var(--red)' : 'var(--white)'};
		box-shadow: 0 6px 8px rgba(0,0,0,0.25);
		transform: translateY(-4px);

		&:hover {
			background-color: ${({ highlighted }) =>
                highlighted ? 'var(--red)' : 'var(--white)'};
			box-shadow: 0 14px 10px rgba(0,0,0,0.1);
			transform: translateY(-12px);
		}
		
		&:active {
			background-color: ${({ highlighted }) =>
                highlighted ? 'var(--white)' : 'var(--black)'};
			box-shadow: 0 2px 4px rgba(0,0,0,0.8);
			transform: translateY(0px);
			transition: 0.1s;
		}
	}
`;

export default GlobalStyles;
