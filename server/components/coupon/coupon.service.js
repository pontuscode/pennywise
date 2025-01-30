import { PrismaClient } from "@prisma/client";


class CouponService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    addCoupon = async (coupon) => {
        console.log("Adding coupon", coupon);
        const website = await this.prisma.website.upsert({
            where: {
                url: coupon.url
            },
            update: {},
            create: {
                url: coupon.url
            }
        });
        const createdCoupon = await this.prisma.coupon.create({
            data: {
                code: coupon.code,
                website: {
                    connect: {
                        id: website.id
                    }
                }
            }
        });
        console.log("Created coupon", createdCoupon);
        return createdCoupon;
    };

    getCoupons = (websiteId) => this.prisma.coupon.findMany({
        select: {
            id: true,
            url: true,
            websiteId: websiteId
        }
    })

    getCoupon = (id) => this.prisma.coupon.findUnique({
        where: { id },
        select: {
            id: true,
            website: true,
            code: true
        }
    });
}

export default CouponService;
