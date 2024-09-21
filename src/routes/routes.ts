import { Router } from "express";

const routes =  Router();


routes.get('/user', (req, res) => {
    res.send('Get All users!')
});

routes.get('/user/:id', (req, res) => {
    res.send('Get one user')
});

routes.post('/user', (req, res) => {
    res.send('Create user')
});

routes.put('/user/:id', (req, res) => {
    res.send('Update user')
});

routes.delete('/user/:id', (req, res) => {
    res.send('Delete user')
});

export default routes