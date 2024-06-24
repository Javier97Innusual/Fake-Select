import { ReactNode } from "react";

export type FakeSelectType = {
    id?: string;
    name: string;
    disabled?: boolean;
    children: ReactNode;
};

export type OptionValueType = {
    value: string | number;
    name: string;
}