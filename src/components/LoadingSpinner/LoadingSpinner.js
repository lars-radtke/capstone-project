import styled, { keyframes } from 'styled-components/macro';

export const LoadingSpinner = () => {
    return (
        <CenterAlign>
            <Div>
                <Circle src="/assets/icons/loadingCircle.svg" alt=""></Circle>
                <Needle src="/assets/icons/loadingNeedle.svg" alt=""></Needle>
            </Div>
            lädt...
        </CenterAlign>
    );
};

const CenterAlign = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Div = styled.div`
    box-sizing: content-box;
    width: 80px;
    height: 80px;
    padding: 20px;
    position: relative;
    margin-bottom: 20px;
`;

const circleAnimation = keyframes`
	0% {
		transform: rotate(0deg)
	}
	100% {
		transform: rotate(360deg)
	}
`;

const needleAnimation = keyframes`
	0% {
		transform: rotate(0deg)
	}
	15% {
		transform: rotate(-120deg)
	}
	30% {
		transform: rotate(80deg)
	}
	45% {
		transform: rotate(-20deg)
	}
	60% {
		transform: rotate(190deg)
	}
	75% {
		transform: rotate(-60deg)
	}
	92%{
		transform: rotate(190deg);
	}
	100% {
		transform: rotate(0deg)
	}
`;

const Circle = styled.img`
    width: 80px;
    position: absolute;
    top: 20px;
    animation: ${circleAnimation} 10s linear infinite;
`;

const Needle = styled.img`
    width: 80px;
    padding: 5px;
    position: absolute;
    top: 20px;
    animation: ${needleAnimation} 6s ease infinite;
`;
