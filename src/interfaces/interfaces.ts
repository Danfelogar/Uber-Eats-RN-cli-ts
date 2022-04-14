// props de headerTabs btns

import { Dispatch, SetStateAction } from "react";

export interface PropsCompHBtn {
    text: string;
    btnColor?: string;
    textColor?: string;
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
}