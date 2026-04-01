'use strict';

const express = require('express');
const router = express.Router();

let users = []; // Simulating a user database

// GET /api/users - Fetch all users
router.get('/api/users', (req, res) => {
    res.json(users);
});

// GET /api/users/:id - Fetch user by ID
router.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// POST /api/users - Create a new user
router.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /api/users/:id - Update a user by ID
router.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        Object.assign(user, req.body);
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// DELETE /api/users/:id - Delete a user by ID
router.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;