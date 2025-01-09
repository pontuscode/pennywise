import Website from "./website.entities.js";


class WebsiteController {
    constructor(websiteService) {
        this.websiteService = websiteService;
    }

    createWebsite = (req, res) => {
        const website = new Website(req.body.url);
        return res.status(201).send(this.websiteService.addWebsite(website));
    }

    getWebsites = (_req, res) => {
        res.status(200).send(this.websiteService.getWebsites());
    }

    getWebsite = (req, res) => {
        const { id } = req.params;
        return res.status(200).send(this.websiteService.getWebsite(id));
    }
}

export default WebsiteController;
