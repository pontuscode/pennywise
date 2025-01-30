
class CouponController {
    constructor(couponService) {
        this.couponService = couponService;
    }

    createCoupon = async (req, res) => {
        try {
            console.log(req.body);
            const coupon = await this.couponService.addCoupon(req.body);
            console.log(coupon);
            return res.status(201).send(coupon);
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
                stack: error.stack
            });
        }
    }

    getCoupons = async (req, res) => {
        try {
            const { websiteId } = req.params;
            const coupons = await this.couponService.getCoupons(parseInt(websiteId));
            return res.status(200).send(coupons);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
                stack: error.stack
            });
        }
    }

    getCoupon = async (req, res) => {
        try {
            const { id } = req.params;
            const coupon = await this.couponService.getCoupon(parseInt(id));
            return res.status(200).send(coupon);
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
                stack: error.stack
            });
        }
    }
}

export default CouponController;
