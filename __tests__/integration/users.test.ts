import request from "supertest";
import server from "../../source/app";

beforeAll(() => {
    console.log('Tests for users initializing ...');
})

afterAll(() => {
    console.log('Users tests finished ...');
})

describe('list users - GET /users', () => {
    it('should return a list of users and 200 status', async () => {
        const response = await request(server)
            .get('/users')
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.text).toContain([]);
    });
});

describe('create list - POST /users', () => {
    it('should response a sucess message and status 200 without erros when pass the correct args', async () => {
        const response = await request(server)
            .post('/users')
            .send({ name: 'john', email:'john@gmail.com' })
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
    });

    it('should response a error message with status 204 when not pass the corrects args', async () => {
        const response = await request(server)
            .post('/users')
            .send({ name: 'john'})
            .set('Accept', 'application/json');

        expect(response.status).toEqual(400);
        expect(response.text).toContain('errors');
    });
});