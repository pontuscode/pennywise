import crypto from "crypto";


class Coupon {
    constructor(websiteId, code) {
        this.id = crypto.randomUUID();
        this.websiteId = websiteId;
        this.code = code;
    }

    toJSON() {
        return {
            id: this.id,
            code: this.code,
            websiteId: this.websiteId
        }
    }
}

export default Coupon;
