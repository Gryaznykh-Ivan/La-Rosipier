interface INavMenuItemLinkType {
    type: "LINK";
    title: string;
    link: string;
    menu: Array<INavMenuItemLinkType>;
}

interface INavMenuHistoryItem {
    title: string;
    menu: NavMenuType;
}

export type NavMenuType = Array<INavMenuItemLinkType>

export interface IBurgerNavMenuState {
    current: NavMenuType;
    history: Array<INavMenuHistoryItem>;
}

export interface INavMenuState {
    current: NavMenuType;
    activeIndex: number;
}