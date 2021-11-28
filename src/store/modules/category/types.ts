export type CategoryState = {
    list: CategoryList[];
};
export type CategoryList = {
    name: string;
} & {
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
