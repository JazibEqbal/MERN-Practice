const express = require('express');
const Questions = require('../models/questions');
const Contests = require('../models/contests');

const Router = new express.Router();

//creating a question and saving that question in contest to which it belongs
Router.post('/questions',async(req,res) => {
    try{
     if(req.body.answer)
        req.body.solution = true;
     const question = new Questions(req.body);
     const saveQuestion = await question.save();
     const contestId = req.body.contest;
     await Contests.findByIdAndUpdate(
        contestId,
        {
            $push :{ question: saveQuestion._id}
        },{
            new: true,
            useFindAndModify: false,
        }
     )
     res.status(200).send(saveQuestion);
    }catch(e){
     res.status(400).send('Cannot Update');
    }
})

//updating question
Router.put('/questions/:questionId', async (req,res) => {
    try{
    const ques = await Questions.findById(req.params.questionId);
    ques.question = req.body.question;
    ques.save();
    res.status(200).send(ques);
    }catch(e){
    res.status(400).send('Cannot Find');
    }
})

//checking and updating answer if it exists for a particular question or not
Router.put('/questions/solution/:questionId', async (req,res) => {
        const answer = req.body.answer;
        const questionId= req.params.questionId;
    try{
        const saveQues = await Questions.findById(questionId);
        if(answer){
            saveQues.answer = answer;
            saveQues.solution = true;
        }
        const ans = await saveQues.save();
        res.status(200).send(ans);
    }
    catch(e){
        res.status(400).send('Cannot Update');
    }
})
//Finding a question with its Id
Router.get('/questions/:questionId', async (req,res) => {
    try{
        const question = await Questions.findById(req.params.questionId);
        res.status(200).send(question);
    }catch(e){
        res.status(400).send('Which Question?');
    }
})

//Knowing questions of a particular contest
Router.get('/questions/contest/:contestId',async (req,res) => {
    try{
        const contest = await Questions.find({contest: req.params.contestId});
        res.status(200).send(contest);
    }catch(e){
        res.status(400).send('Which Contest?');
    }
})
module.exports = Router