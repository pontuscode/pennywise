import websiteModule from "../components/website/website.module.js";

export default (app) => {
    app.use("/websites", websiteModule.router);
}
