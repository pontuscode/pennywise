import { Coupon } from "./Coupon";

export type Website = {
    websiteId: string;
    coupons?: Coupon[];
    url: string;
}

export type InputCreateWebsite = {
    url: string;
    coupon?: Coupon;
    description?: string;
}


export type InputUpdateWebsite = {
    websiteId: string;
    newCoupon?: Coupon;
    newDescription?: string;
}
