import express from "express";

class WebsiteRouter {
    constructor(websiteController) {
        this.websiteController = websiteController;
    }

    getRouter() {
        const router = express.Router();
        router.route("/:id").get(this.websiteController.getWebsite);
        router.route("/").get(this.websiteController.getWebsites);
        router.route("").post(this.websiteController.createWebsite);
        return router;
    }
}

export default WebsiteRouter;
