import { MouseEvent, useState } from 'react';
import classNames from 'classnames';
import { DEFAULT_VALUE } from './FakeSelect.constants';
import { FakeSelectType, OptionValueType } from './FakeSelect.type';
import './FakeSelect.css';

export function FakeSelect({ id, placeholder, onChange, disabled, children }: FakeSelectType) {
    const [isSelectActive, setSelectActive] = useState<boolean>(false);
    const [currentOption, setCurrentOption] = useState<OptionValueType>({
        value: '',
        name: placeholder || DEFAULT_VALUE
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

        onChange(target.dataset.id);

        setSelectActive(!isSelectActive);
    }

    return (
        <div
            id={id}
            className={classNames('select-main', { 'is-active': !disabled && isSelectActive })}
        >
            <div
                className="select-current"
                onClick={() => setSelectActive(!isSelectActive)}
            >
                {currentOption.name}
            </div>
            {!disabled && isSelectActive && (
                <>
                    <div
                        className="select-container"
                        onClick={handleOption}
                    >
                        {children}
                    </div>
                    <div
                        className="select-background"
                        onClick={() => setSelectActive(!isSelectActive)}
                    ></div>
                </>
            )}
        </div>
    )
}