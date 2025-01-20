import axios from 'axios'
import { APIResponse } from '@/types/APIResponse';
import { InputCreateWebsite, InputUpdateWebsite, Website } from '@/types/Website';


const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api/v1/websites',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});


async function getWebsites() {
    return await apiClient.get<APIResponse<Website[]>>("/");
}


export const websiteController = {
    getWebsites
}