interface INavMenuOptionMenuType {
    type: "MENU";
    title: string;
    menu: Array<INavMenuOptionMenuType | INavMenuOptionLinkType>
}

interface INavMenuOptionLinkType {
    type: "LINK";
    title: string;
    link: string;
}

interface INavMenuHistoryItem {
    title: string;
    menu: NavMenuType;
}

export type NavMenuType = Array<INavMenuOptionMenuType | INavMenuOptionLinkType>

export interface IBurgerNavMenuState {
    current: NavMenuType;
    history: Array<INavMenuHistoryItem>;
}