import { ReactNode } from "react";

export type FakeSelectType = {
    id?: string;
    placeholder?: string;
    content?: OptionValueType;
    onChange: (newValue: string) => void;
    disabled?: boolean;
    children: ReactNode;
};

export type OptionValueType = {
    value: string | number;
    name: string;
}