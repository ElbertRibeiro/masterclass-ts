import { Request, Response } from 'express';

const users = [
    {
        name: 'Elbert',
        email: 'teste@teste.com'
    },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};