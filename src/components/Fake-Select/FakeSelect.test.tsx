import { render, fireEvent } from '@testing-library/react';
import { FakeSelect } from './FakeSelect';
import { FakeOption } from './../Fake-Option/FakeOption';
import { DEFAULT_VALUE } from './FakeSelect.constants';

describe('FakeSelect component', () => {
    const onChangeMock = jest.fn();

    it('should render correctly and match snapshot', () => {
        const { asFragment } = render(
            <FakeSelect id="SelectName" onChange={onChangeMock}>
                <FakeOption value="red">Rojo</FakeOption>
                <FakeOption value="blue">Azul</FakeOption>
                <FakeOption value="green">Verde</FakeOption>
            </FakeSelect>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('should open options list when clicked', () => {
        const { getByText } = render(
            <FakeSelect id="SelectName" onChange={onChangeMock}>
                <FakeOption value="red">Rojo</FakeOption>
                <FakeOption value="blue">Azul</FakeOption>
                <FakeOption value="green">Verde</FakeOption>
            </FakeSelect>
        );

        fireEvent.click(getByText(DEFAULT_VALUE));

        expect(getByText('Rojo')).toBeInTheDocument();
        expect(getByText('Azul')).toBeInTheDocument();
        expect(getByText('Verde')).toBeInTheDocument();
    });

    it('should update current option and closes list when an option is clicked', () => {
        const { getByText, container } = render(
            <FakeSelect id="SelectName" onChange={onChangeMock}>
                <FakeOption value="red">Rojo</FakeOption>
                <FakeOption value="blue">Azul</FakeOption>
                <FakeOption value="green">Verde</FakeOption>
            </FakeSelect>
        );

        fireEvent.click(getByText(DEFAULT_VALUE));
        fireEvent.click(getByText('Rojo'));

        expect(onChangeMock).toHaveBeenCalledWith('red');
        expect(container.querySelector('.select-container')).not.toBeInTheDocument();
    });

    it('should not open options list when disabled', () => {
        const { getByText, container } = render(
            <FakeSelect id="SelectName" onChange={onChangeMock} disabled>
                <FakeOption value="red">Rojo</FakeOption>
                <FakeOption value="blue">Azul</FakeOption>
                <FakeOption value="green">Verde</FakeOption>
            </FakeSelect>
        );

        fireEvent.click(getByText(DEFAULT_VALUE));

        expect(container.querySelector('.select-container')).not.toBeInTheDocument();
    });
});