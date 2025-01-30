
class WebsiteController {
    constructor(websiteService) {
        this.websiteService = websiteService;
    }

    createWebsite = async (req, res) => {
        try {
            console.log("Hej!", req.body);
            const website = await this.websiteService.addWebsite(req.body);
            return res.status(201).send(website);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
                stack: error.stack
            });
        }
    }

    getWebsites = async (_req, res) => {
        try {
            const websites = await this.websiteService.getWebsites();
            return res.status(200).send(websites);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
                stack: error.stack
            });
        }
    }

    getWebsite = async (req, res) => {
        try {
            const { id } = req.params;
            const website = await this.websiteService.getWebsite(parseInt(id));
            return res.status(200).send(website);
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
                stack: error.stack
            });
        }
    }

    getCouponsForWebsite = async (req, res) => {
        try {
            const { id } = req.params;
            const coupons = await this.websiteService.getCouponsForWebsite(parseInt(id));
            return res.status(200).send(coupons);
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
                stack: error.stack
            });
        }
    }
}

export default WebsiteController;
