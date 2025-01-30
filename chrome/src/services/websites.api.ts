import axios from 'axios'
import { APIResponse } from '@/types/APIResponse';
import { InputCreateWebsite, InputUpdateWebsite, Website } from '@/types/Website';
import { Coupon } from "@types/Coupon";


const apiClient = axios.create({
    baseURL: 'http://localhost:3243/api/v1/websites',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});


async function getWebsites() {
    return await apiClient.get<APIResponse<Website[]>>("/");
}


async function createWebsite(input: InputCreateWebsite) {
    return await apiClient.post<APIResponse<Website>>("/", input);
}

async function getCouponsForWebsite(websiteId: number) {
    return await apiClient.get<APIResponse<Coupon[]>>(`/${websiteId}/coupons`);
}


export const websiteController = {
    getWebsites,
    createWebsite,
    getCouponsForWebsite
}