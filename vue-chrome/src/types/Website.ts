export type Website = {
    websiteId: string;
    // coupons?: [Coupon];
    url: string;
}

export type InputCreateContainer = {
    url: string;
    promoCode: string;
    description?: string;
}


export type InputUpdateContainer = {
    websiteId: string;
    newPromoCode?: string;
    newDescription?: string;
}
