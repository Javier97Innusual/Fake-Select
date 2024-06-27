import classNames from "classnames";
import { FakeOptionType } from "./FakeOption.types";
import './FakeOption.css';

export function FakeOption({ value, children, hidden }: FakeOptionType) {
    return (
        <div
            className={classNames('select-option', { 'select-hidden': hidden })}
            data-id={value}
        >
            {children}
        </div>
    )
}