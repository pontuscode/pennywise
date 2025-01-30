import { websiteController } from "./websites.api";
import { couponController } from "./coupons.api";


export const API = {
    websites: websiteController,
    coupons: couponController
}
