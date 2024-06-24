import { MouseEvent, useState } from 'react';
import { DEFAULT_VALUE } from './FakeSelect.constants';
import { FakeSelectType, OptionValueType } from './FakeSelect.type';
import './FakeSelect.css';

export function FakeSelect({ name, disabled, children }: FakeSelectType) {
    const [currentOption, setCurrentOption] = useState<OptionValueType>({
        value: '',
        name: ''
    });

    const handleOption = (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (target.dataset.id === undefined || target.innerHTML === null || disabled) {
            return;
        }

        setCurrentOption({
            value: target.dataset.id,
            name: target.innerText
        });
    }

    return (
        <div
            className="select-main"
        >
            <input
                name={name}
                disabled={disabled}
                placeholder={DEFAULT_VALUE}
                value={currentOption.name}
            />
            <div
                className="select-container"
                onClick={handleOption}
            >
                {children}
            </div>
        </div>
    )
}