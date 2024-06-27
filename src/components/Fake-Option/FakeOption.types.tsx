import { ReactNode } from "react";

export type FakeOptionType = {
    value: string;
    children: ReactNode;
    hidden?: boolean;
};