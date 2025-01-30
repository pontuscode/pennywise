import { ref } from "vue";
import { defineStore } from 'pinia';
import { InputCreateCoupon, InputUpdateCoupon, Coupon } from "@/types/Coupon";
import { APIResponse } from "@/types/APIResponse";
import { API } from "@/services";
import { AxiosError } from "axios";


export const useCouponsStore = defineStore("Coupons", () => {
    const coupons = ref<Coupon[]>([]);

    function initCoupons(data: Coupon[]) {
        coupons.value = data;
    }

    function clearCoupons() {
        coupons.value = [];
    }

    function addNewCoupon(coupon: Coupon) {
        coupons.value.push(coupon);
    }

    function updateCoupon(coupon: Coupon) {
        const idx = coupons.value.findIndex((c: Coupon) => c.couponId === coupon.couponId);
        if (idx === -1) return;
        coupons.value[idx] = coupon;
    }

    function removeCoupon(couponId: string) {
        const idx = coupons.value.findIndex(c => c.couponId === couponId);
        if (idx === -1) return;
        coupons.value.splice(idx, 1);
    }

    /**
     * Async operations have “dispatch” in the name as a convention.
     */

    /* async function dispatchGetCoupons(): Promise<APIResponse<null>> {
         try {
             const { status, data } = await API.coupons.getCoupons();
             if (status === 200) {
                 initCoupons(data.content);
                 return {
                     success: status === 200,
                     content: null
                 }
             }
         } catch (error) {
             const _error = error as AxiosError<string>;
             return {
                 success: false,
                 status: _error.response?.status,
                 content: null
             }
         }
         return {
             success: false,
             content: null,
             status: 400
         }
     }*/

    async function dispatchCreateCoupon(input: InputCreateCoupon): Promise<APIResponse<null>> {
        try {
            const { status, data } = await API.coupons.createCoupon(input);

            if (status === 200) {
                addNewCoupon(data.content);
                return {
                    success: true,
                    content: null
                }
            }
        } catch (error) {
            const _error = error as AxiosError<string>;
            return {
                success: false,
                status: _error.response?.status,
                content: null
            }
        }
        return {
            success: false,
            content: null,
            status: 400
        }
    }

    /*async function dispatchUpdateCoupon(input: InputUpdateCoupon): Promise<APIResponse<null>> {
        try {
            const { status, data } = await API.coupons.updateCoupon(input);
            if (status === 200) {
                updateCoupon(data.content);
                return {
                    success: true,
                    content: null
                }
            }
        } catch (error) {
            const _error = error as AxiosError<string>;
            return {
                success: false,
                status: _error.response?.status,
                content: null
            }
        }
        return {
            success: false,
            content: null,
            status: 400
        }
    }*/


    /*async function dispatchDeleteCoupon(couponId: string): Promise<APIResponse<null>> {
        try {
            const { status } = await API.coupons.deleteCoupon(couponId);
            if (status === 200) {
                removeCoupon(couponId);
                return {
                    success: true,
                    content: null
                }
            }
        } catch (error) {
            const _error = error as AxiosError<string>;
            return {
                success: false,
                content: null,
                status: _error.response?.status
            }
        }
        return {
            success: false,
            content: null,
            status: 400
        }
    }*/

    return {
        coupons,
        initCoupons,
        removeCoupon,
        dispatchCreateCoupon,
        // dispatchGetCoupons,
        // dispatchUpdateCoupon,
        // dispatchDeleteCoupon
    }
})
