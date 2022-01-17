export interface Zlfera {
    msg: string;
    result: Result;
}

export interface Result {
    id: string;
    name: string;
    picture: null;
    parentID: string;
    parentName: string;
    goods: Good[];
    categories: Category[];
    brands: Brand[];
    saleProperties: SaleProperty[];
    selectedBrand: null;
}

export interface Brand {
    id: string;
    name: string;
    nameEn: string;
    logo: string;
    picture: string;
    type: null;
    desc: string;
    place: string;
}

export interface Category {
    id: string;
    name: string;
    layer: number;
    parent: null;
}

export interface Good {
    id: string;
    name: string;
    desc: string;
    price: string;
    picture: string;
    discount: null;
    orderNum: number;
}

export interface SaleProperty {
    id: string;
    name: string;
    properties: Property[];
    selectedProp: undefined | null | string;
}

export interface Property {
    id: string | null;
    name: string;
}
