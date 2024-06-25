import { ReactNode } from "react";

export type FakeSelectType = {
    id?: string;
    placeholder?: string;
    onChange: (newValue: string) => void;
    disabled?: boolean;
    children: ReactNode;
};

export type OptionValueType = {
    value: string | number;
    name: string;
}