import application from "../../../source/app";
import request from "supertest";
import { User } from '../../../source/models/User';

async function create(user: User) {
    return await request(application.express)
        .post('/api/v1/users')
        .set({
            'Accept': 'application/json'
        })
        .send(user);
}

async function list(params: { token: string }) {
    const { token } = params;
    return await request(application.express)
        .get('/api/v1/users')
        .set({
            'Accept': 'application/json',
            'Authorization': token
        })
}

export default {
    create,
    list
}