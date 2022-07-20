import { Router } from 'express'
import { auth } from '../../middleware/auth.js';
import { Review } from './review.model.js';
import { check, validationResult } from 'express-validator';

const router = Router();

// @route   POST api/v1/reviews
// @desc    Post Vehicle review
// @access  Private
router.post('/', auth, async(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const  { text, rating, vehicleId } = req.body;
        const userId = req.user.id;

        let review = new Review({text, rating, vehicleId, userId});

        // save doc
        await review.save();

        // return 
        return res.status(201).json({ success: true, data: review })

    } catch(err) {
        console.error(error.message);
        res.status(500).send(`Server Error in review ${error}`);
    }

});

// @route   DELETE api/v1/reviews/:id
// @desc    Delete Vehicle review
// @access  Private
router.delete('/:id', auth, async(req, res) => {
    try {
        await Review.findOneAndDelete({ _id: req.params.id })
        res.status(204).send({ success:true });
    } catch(err) {
        console.error(error.message);
        res.status(500).send(`Server Error in review ${error}`);
    }
})

export default router;