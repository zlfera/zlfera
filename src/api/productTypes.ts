export interface Data {
    msg: string;
    result: Goods;
}

export interface Goods {
    id: string;
    name: string;
    spuCode: string;
    desc: string;
    price: string;
    oldPrice: string;
    discount: number;
    inventory: number;
    brand: Brand;
    salesCount: number;
    commentCount: number;
    collectCount: number;
    mainVideos: any[];
    videoScale: number;
    mainPictures: string[];
    specs: ResultSpec[];
    skus: Skus[];
    categories: Category[];
    details: Details;
    isPreSale: boolean;
    isCollect: null;
    recommends: null;
    userAddresses: null;
    similarProducts: HotByDay[];
    hotByDay: HotByDay[];
    evaluationInfo: EvaluationInfo;
}

export interface Brand {
    id: string;
    name: string;
    nameEn: string;
    logo: null;
    picture: null;
    type: null;
    desc: null;
    place: null;
}

export interface Category {
    id: string;
    name: string;
    layer: number;
    parent: Category | null;
}

export interface Details {
    pictures: string[];
    properties: Property[];
}

export interface Property {
    name: string;
    value: string;
}

export interface EvaluationInfo {
    id: string;
    orderInfo: OrderInfo;
    member: null;
    score: number;
    tags: null;
    content: string;
    pictures: null;
    officialReply: null;
    praiseCount: number;
    createTime: Date;
    praisePercent: number;
}

export interface OrderInfo {
    specs: any[];
    quantity: number;
    createTime: Date;
}

export interface HotByDay {
    id: string;
    name: string;
    desc: string;
    price: string;
    picture: string;
    discount: null;
    orderNum: number;
}

export interface Skus {
    id: string;
    skuCode: string;
    price: string;
    oldPrice: string;
    inventory: number;
    specs: SkusSpec[];
}

export interface SkusSpec {
    name: string;
    valueName: string;
}

export interface ResultSpec {
    name: string;
    values: Value[];
}

export interface Value {
    name: string;
    picture: string;
    desc: string;
}
