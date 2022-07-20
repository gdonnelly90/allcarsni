import { Router } from 'express';
import { auth, restrict } from '../../middleware/auth.js';
import { SubscriptionType } from './subscriptionType.model.js';
import { validationResult } from 'express-validator';

const router = Router();
const serviceName = 'SubscriptionType'


// @route   POST api/v1/subscriptiontypes
// @desc    Create subscription type
// @access  Private
router.post('/', auth, restrict('admin'),  async (req, res) => {
      
    const errors = validationResult(req);
      
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        // lift params from body
        const { name, price, type, quantity  } = req.body;
        // see if subscription exists
        let subscriptionType = await SubscriptionType.findOne({ name });
        // if exists
        if (subscriptionType) {
          return res
            .status(400)
            .json({ errors: [{ message: 'An error has occurred, duplicate entry' }] });
        }
        // create new sub model
        subscriptionType = new SubscriptionType({name, price, type, quantity});
        // save doc
        await subscriptionType.save();
        // return 
        return res.status(201).json({ success: true, data: subscriptionType })
      } catch (error) {
        console.error(error.message);
        res.status(500).send(`Server Error in users.js ${error}`);
      }
    }
  );


// @route   PUT api/v1/subscriptiontypes/:id
// @desc    Update subscription type
// @access  Private
router.put('/:id', auth, restrict('admin'), async (req,res) => {
try {
    // extract the id from url
    const { id } = req.params;
    // get the list of fields to update
    const { name, price, type,  quantity} = req.body;
    // new return new updated document
    await SubscriptionType.findOneAndUpdate({_id: id}, { $set: { name, price, type, quantity}}, {new: true})
        .then(subscription => {
            return res.status(200).json({success: true, data: subscription})
        })
        .catch(error => {
            return res.status(500).json({ success: false, error});
        })
}
catch(error) {
    console.error(error.message);
    res.status(500).send(`PUT ${serviceName}, Server Error in users.js ${error}`);
}
})

  export default router;