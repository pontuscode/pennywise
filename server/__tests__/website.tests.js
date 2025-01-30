
import app from "../app";
import request from "supertest";


describe('Post Endpoints', () => {
    it('should create a new website', async () => {
        const res = await request(app)
            .post('/api/v1/websites')
            .send({
                url: "www.haha.com"
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    });
});
