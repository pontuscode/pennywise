import crypto from "crypto";


class Website {
    constructor(url) {
        this.id = crypto.randomUUID();
        this.url = url;
    }

    toJSON() {
        return {
            id: this.id,
            url: this.url
        }
    }
}

export default Website;
