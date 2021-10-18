import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonWithIcon } from 'components';

describe('Button', () => {
    const image = 'https://c.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif';
    const text = 'Button';
    const mockOnClick = jest.fn();

    it('has an Icon', () => {
        render(<ButtonWithIcon icon={image} />);

        const icon = screen.getByRole('img');
        expect(icon).toBeInTheDocument();
    });

    it('has an Text', () => {
        render(<ButtonWithIcon icon={image} text={text} />);

        const buttonText = screen.getByText('Button');
        expect(buttonText).toBeInTheDocument();
    });

    it('has no onClick when no function is passed to it', () => {
        render(<ButtonWithIcon icon={image} text={text} />);

        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('has an onClick when a function is passed to it', () => {
        render(
            <ButtonWithIcon icon={image} text={text} action={mockOnClick} />,
        );

        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('is not clickable when passing "disabled" to it', () => {
        render(
            <ButtonWithIcon
                icon={image}
                text={text}
                action={mockOnClick}
                disabled={true}
            />,
        );

        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(mockOnClick).not.toHaveBeenCalled();
    });
});
