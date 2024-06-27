import { MouseEvent, useState } from 'react';
import classNames from 'classnames';
import { FakeSelectType } from './FakeSelect.types';
import './FakeSelect.css';

export function FakeSelect({ id, content, onChange, disabled, children }: FakeSelectType) {
    const [isSelectActive, setSelectActive] = useState<boolean>(false);

    const handleOption = (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (target.dataset.id === undefined || target.innerHTML === null || disabled) {
            return;
        }

        onChange({
            value: target.dataset.id,
            name: target.innerText
        });

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
                {content.name}
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