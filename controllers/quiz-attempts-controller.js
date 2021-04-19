const quizAttemptDao = require('../daos/quiz-attempts-dao');

module.exports = (app) => {
    const createAttempt = (req, res) => {
        const qid = req.params['qid'];
        const attempt = req.body;
        console.log(attempt)
        quizAttemptDao.createAttempt(qid, attempt)
            .then(r => res.send(r));
    }

    const findAttemptsForQuiz = (req, res) => {
        const qid = req.params['qid'];
        quizAttemptDao.findAttemptsForQuiz(qid)
            .then(attempts => res.send(attempts));
    }

    app.post('/api/quizzes/:qid/attempts', createAttempt);
    app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz);
}
