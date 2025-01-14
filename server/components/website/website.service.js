import { PrismaClient } from "@prisma/client";


class WebsiteService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    addWebsite = async (website) => {
        console.log("Creating website ", website);
        const { createdWebsite } = await this.prisma.website.create({ data: website });
        console.log(createdWebsite);
        return createdWebsite;
    };

    getWebsites = () => this.prisma.website.findMany({
        select: {
            id: true,
            url: true
        }
    })

    getWebsite = (id) => this.prisma.website.findUnique({
        where: { id },
        select: {
            id: true,
            url: true
        }
    });
}

export default WebsiteService;
