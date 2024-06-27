import { ReactNode } from "react";
import { OptionValueType } from "../../App.types";

export type FakeSelectType = {
    id?: string;
    content: OptionValueType;
    onChange: (newValue: OptionValueType) => void;
    disabled?: boolean;
    children: ReactNode;
};