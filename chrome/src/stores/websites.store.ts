import { watch, ref } from "vue";
import { defineStore } from 'pinia';
import { InputCreateWebsite, InputUpdateWebsite, Website } from "@/types/Website";
import { APIResponse } from "@/types/APIResponse";
import { API } from "@/services";
import { AxiosError } from "axios";


export const useWebsitesStore = defineStore("Websites", () => {
    const websites = ref<Website[]>([]);

    function initWebsites(data: Website[]) {
        websites.value = data;
    }

    function clearWebsites() {
        websites.value = [];
    }

    function addNewWebsite(website: Website) {
        websites.value.push(website);
    }

    function updateWebsite(website: Website) {
        const idx = websites.value.findIndex((w: Website) => w.websiteId === website.websiteId);
        if (idx === -1) return;
        websites.value[idx] = website;
    }

    function removeWebsite(websiteId: string) {
        const idx = websites.value.findIndex(w => w.websiteId === websiteId);
        if (idx === -1) return;
        websites.value.splice(idx, 1);
    }

    /**
     * Async operations have “dispatch” in the name as a convention.
     */

    async function dispatchGetWebsites(): Promise<APIResponse<null>> {
        try {
            const { status, data } = await API.websites.getWebsites();
            if (status === 200) {
                initWebsites(data.content);
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
    }

    async function dispatchCreateWebsite(input: InputCreateWebsite): Promise<APIResponse<null>> {
        try {
            const { status, data } = await API.websites.createWebsite(input);

            if (status === 200) {
                addNewWebsite(data.content);
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

    async function dispatchUpdateWebsite(input: InputUpdateWebsite): Promise<APIResponse<null>> {
        try {
            const { status, data } = await API.websites.updateWebsite(input);
            if (status === 200) {
                updateWebsite(data.content);
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


    async function dispatchDeleteWebsite(websiteId: string): Promise<APIResponse<null>> {
        try {
            const { status } = await API.websites.deleteWebsite(websiteId);
            if (status === 200) {
                removeWebsite(websiteId);
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
    }

    return {
        websites,
        initWebsites,
        removeWebsite,
        dispatchCreateWebsite,
        dispatchGetWebsites,
        dispatchUpdateWebsite,
        dispatchDeleteWebsite
    }
})
