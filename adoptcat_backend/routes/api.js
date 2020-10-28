const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');

router.get('/cat', async(req, res, next) => {

    const { page = 1, limit = 10 } = req.query;

    try {
        // execute query with page and limit values
        const posts = await Cat.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Cat.countDocuments();

        // return response with posts, total pages, and current page
        res.json({
            posts,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        console.error(err.message);
    }

    // Cat.paginate({})
    //     .then(data => res.json(data))
    //     .catch(next)
});

router.post('/cat', (req, res, next) => {
    if (req.body.name) {
        Cat.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/cat/:id', (req, res, next) => {
    Cat.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;