import websiteModule from "../components/website/website.module.js";

const baseUrl = "/api/v1";

export default (app) => {
    app.use(`${baseUrl}/websites`, websiteModule.router);
}
