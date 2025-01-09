class WebsiteService {
    constructor() {
        this.websites = [];
    }

    addWebsite = (website) => {
        this.websites.push(website);
        return website;
    };

    getWebsites = () => this.websites;

    getWebsite = (id) => {
        const website = this.websites.find((u) => u.id === id);
        return website;
    };
}

export default WebsiteService;
