import { Website } from "./Website";

export type Coupon = {
    websiteId: string;
    website: Website;
    code: string;
    couponId: string;
}

export type InputCreateCoupon = {
    url: string;
    code: string;
}


export type InputUpdateCoupon = {
    couponId: number;
    newPromoCode?: string;
}
