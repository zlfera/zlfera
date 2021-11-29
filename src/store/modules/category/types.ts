export type CategoryState = {
    list: CategoryList[];
};
export type CategoryList = {
    name: string;
} & {
    open: boolean;
    id: string;
    picture: string;
    children: [
        {
            id: string;
            name: string;
            picture: string;
            children: [];
            goods: [];
        }
    ];
};
