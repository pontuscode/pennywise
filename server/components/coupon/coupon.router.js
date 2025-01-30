import express from "express";

class CouponRouter {
    constructor(couponController) {
        this.couponController = couponController;
    }

    getRouter() {
        const router = express.Router();
        router.route("/:id").get(this.couponController.getCoupon);
        router.route("/").get(this.couponController.getCoupons);
        router.route("/").post(this.couponController.createCoupon);
        return router;
    }
}

export default CouponRouter;
