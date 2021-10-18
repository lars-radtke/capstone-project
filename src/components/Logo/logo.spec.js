import { render, screen } from '@testing-library/react';
import { Logo } from 'components';

describe('Logo', () => {
    it('renders an image', () => {
        render(<Logo />);

        const Image = screen.getByAltText('Student Compass');
        expect(Image).toBeInTheDocument();
    });
});
