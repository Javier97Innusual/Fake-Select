import { DEFAULT_VALUE } from './FakeSelect.constants';
import { FakeSelectType } from './FakeSelect.type';
import './FakeSelect.css';

export function FakeSelect({ name, disabled, children }: FakeSelectType) {
    return (
        <div
            className="select-main"
        >
            <input
                name={name}
                disabled={disabled}
                placeholder={DEFAULT_VALUE}
            />
            <div
                className="select-container"
            >
                {children}
            </div>
        </div>
    )
}