import GlobalStyles from '../src/Styles/GlobalStyles';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    Story => (
        <>
            <GlobalStyles />
            <Story />
        </>
    ),
];
