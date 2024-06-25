import { render } from '@testing-library/react';
import { FakeOption } from './FakeOption';

describe('FakeOption component', () => {
    it('should render correctly and match snapshot when hidden is false', () => {
        const { asFragment } = render(
            <FakeOption value="1">Option 1</FakeOption>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correctly and match snapshot when hidden is true', () => {
        const { asFragment } = render(
            <FakeOption value="1" hidden>Option 1</FakeOption>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('should apply the hidden class when hidden prop is true', () => {
        const { container } = render(
            <FakeOption value="1" hidden>Option 1</FakeOption>
        );

        expect(container.firstChild).toHaveClass('select-hidden');
    });

    it('should not apply the hidden class when hidden prop is false', () => {
        const { container } = render(
            <FakeOption value="1">Option 1</FakeOption>
        );

        expect(container.firstChild).not.toHaveClass('select-hidden');
    });
});