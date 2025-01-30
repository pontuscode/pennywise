import axios from 'axios'
import { APIResponse } from '@/types/APIResponse';
import { InputCreateCoupon, InputUpdateCoupon, Coupon } from '@/types/Coupon';


const apiClient = axios.create({
    baseURL: 'http://localhost:3243/api/v1/coupons',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});


async function getCoupons(websiteId: number) {
    return await apiClient.get<APIResponse<Coupon[]>>("/");
}

async function createCoupon(input: InputCreateCoupon) {
    return await apiClient.post<APIResponse<Coupon>>("/", input)
}


export const couponController = {
    getCoupons,
    createCoupon
}
