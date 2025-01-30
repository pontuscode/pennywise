import websiteModule from "../components/website/website.module.js";
import couponModule from "../components/coupon/coupon.module.js";

const baseUrl = "/api/v1";

export default (app) => {
    app.use(`${baseUrl}/websites`, websiteModule.router);
    app.use(`${baseUrl}/coupons`, couponModule.router);
}
