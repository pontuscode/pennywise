import CouponController from "./coupon.controller.js";
import CouponRouter from "./coupon.router.js";
import CouponService from "./coupon.service.js";

const service = new CouponService();
const controller = new CouponController(service);
const router = new CouponRouter(controller);

export default {
    service: service,
    controller: controller,
    router: router.getRouter()
}
