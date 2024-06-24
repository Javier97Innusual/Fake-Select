import { FakeOptionType } from "./FakeOption.type";
import './FakeOption.css';

export function FakeOption({ value, children, hidden }: FakeOptionType) {
    return (
        <div
            className="select-option"
            data-id={value}
        >
            {children}
        </div>
    )
}