import WebsiteController from "./website.controller.js";
import WebsiteRouter from "./website.router.js";
import WebsiteService from "./website.service.js";

const service = new WebsiteService();
const controller = new WebsiteController(service);
const router = new WebsiteRouter(controller);

export default {
    service: service,
    controller: controller,
    router: router.getRouter()
}
