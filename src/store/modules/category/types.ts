// export type CategoryState = {
//     list: CategoryList[];
// };
// export type CategoryList = {
//     name: string;
// } & {
//     open: boolean;
//     id: string;
//     picture: string;
//     children: [
//         {
//             id: string;
//             name: string;
//             picture: string;
//             children: [];
//             goods: [
//                 {
//                     id: string;
//                 }
//             ];
//         }
//     ];
//     goods: [];
// };

export type CategoryState = {
    list: CategoryList[];
};
export type CategoryList = {
    id: string;
    name: string;
    picture: string;
    children: CategoryList[] | null;
    goods: Good[] | null;
    open?: boolean;
    brands?: [];
};
export type Good = {
    id: string;
    name: string;
    desc: string;
    price: string;
    picture: string;
    discount: null;
    orderNum: null;
};
// export interface Untitled1 {
//     list: List[];
// }

// export interface List {
//     id: string;
//     name: string;
//     picture: string;
//     children: List[] | null;
//     goods: Good[] | null;
//     open?: boolean;
// }

// export interface Good {
//     id: string;
//     name: string;
//     desc: string;
//     price: string;
//     picture: string;
//     discount: null;
//     orderNum: null;
// }
