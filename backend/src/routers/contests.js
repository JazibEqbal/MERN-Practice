const express = require('express');
const Contests = require('../models/contests');
const Router = new express.Router();

Router.post('/contest', async (req,res) => {
    const contest = new Contests(req.body);
    try{
     await contest.save();
     res.status(201).send({contest})
    }catch(e){
     res.status(400).send('Cannot create contest');
    }
})

Router.get('/contest', async (req,res) => {
    try{
        const contests = await Contests.find().sort({dateofcontest: -1})
        res.status(200).send({contests})
    }catch(e){
        res.status(400).send('Cannot Find');
    }
})

Router.get('/contest/organiser/:organisername', async (req,res) => {
    try{
        const contest = await Contests.find({
            organiser: req.params.organisername,
        }).sort({createdAt: -1})
        res.status(200).send({contest})
    }catch(e){
        res.status(400).send('Cannot get')
    }
})

module.exports =Router