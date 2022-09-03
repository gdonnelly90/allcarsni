import { Router } from 'express';
import { Message } from './messages.model.js';
import { auth } from '../../middleware/auth.js';
import { checkObjectId } from '../../middleware/checkObjectId.js';
import { Vehicle } from '../vehicle/vehicle.model.js';
import { User } from '../user/user.model.js';

const router = new Router();

// // @route    POST api/v1/messages/:vehicleId/
// // @desc     POST a message to a seller
// // @access   Private
router.post('/:vehicleId', auth, async (req, res) => {
  try {
    // this is the ID of the user who is sending the message
    const { id } = req.user;
    const { vehicleId } = req.params;

    const { firstName, lastName, mobile, messageBody } = req.body;
    // recipient has both the vehicle ID and the ID of the user who posted the vehicle for sale
    // the user is referred to as 'user' within the query below
    const recipient = await Vehicle.findOne({ id: vehicleId }).select('user');

    const message = new Message({
      user: id,
      recipientUserId: recipient.user,
      vehicleId: recipient.id,
      firstName,
      lastName,
      mobile,
      messageBody,
    });

    const response = await message.save();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Messages Server Error');
  }
});

// // @route    GET api/v1/message/:vehicleId/
// // @desc     GET all messages relating to this car
// // @access   Private
router.get('/:vehicleId', auth, async (req, res) => {
  try {
    console.log(req.params);
    // this is the ID of the user who is sending the message
    const messages = await Message.find(req.params)
      .select('messageBody')
      .populate('firstName')
      .populate('lastName')
      .populate('mobile')
      .sort({ date: -1 });

    res.status(200).json(messages);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Messages Server Error');
  }
});

// @route    GET api/v1/message/
// @desc     GET all messages from logged in user
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const recipientUserId = req.user.id;

    // this is the ID of the user who is sending the message
    const userMessages = await Message.find({
      recipientUserId: recipientUserId,
    })
      // .select('messageBody')
      .populate('firstName')
      .populate('lastName')
      .populate('mobile');

    res.status(200).json(userMessages);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Messages Server Error');
  }
});

// @route    GET api/v1/message/
// @desc     GET all messages sent by this user
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;

    const userMessages = await Message.find({
      user: userId,
    })
      .select('messageBody')
      .populate('firstName')
      .populate('lastName')
      .populate('mobile');

    if (userMessages.length < 1) {
      const recipientUserId = req.user.id;
      console.log(recipientUserId);
      // this is the ID of the user who is sending the message
      const userMessages = await Message.find({
        recipientUserId: recipientUserId,
      })
        .select('messageBody')
        .populate('firstName')
        .populate('lastName')
        .populate('mobile');

      res.status(200).json(userMessages);
    } else {
      res.status(200).json(userMessages);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Messages Server Error');
  }
});

// @route    DELETE api/v1/messages/:id
// @desc     Delete message by ID
// @access   Private
router.delete('/:id', checkObjectId('id'), auth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;

    const userMessages = await Message.findById(id);

    if (!userMessages) {
      return res
        .status(404)
        .json({ success: false, message: 'There is no message to delete' });
    }

    // make sure the current user is the same person who created it.
    if (userMessages.user.toString() !== user.id) {
      return res.status(400).json({
        success: false,
        message: 'Not authorised to delete this message',
      });
    }

    await Message.deleteOne({ _id: id });

    res.status(201).json({ sucess: true, message: 'Message removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Delete Message Server Error');
  }
});

export default router;

// @route    GET api/v1/message/
// @desc     GET all messages from logged in user
// @access   Private
// router.get('/', auth, async (req, res) => {
//   try {
//     const recipientUserId = req.user.id;
//     console.log(recipientUserId);
//     // this is the ID of the user who is sending the message
//     const userMessages = await Message.find({
//       recipientUserId: recipientUserId,
//     }).select('messageBody');

//     res.status(200).json(userMessages);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Messages Server Error');
//   }
// });

// @route    GET api/v1/message/
// @desc     GET all messages sent by this user
// @access   Private
// router.get('/', auth, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     console.log(userId);
//     // this is the ID of the user who is sending the message
//     const userMessages = await Message.find({
//       user: userId,
//     }).select('messageBody');

//     res.status(200).json(userMessages);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Messages Server Error');
//   }
// });
