import nc from 'next-connect';
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  }
}).post(async (req, res) => {
  const { userId, firstName, lastName, role, username } = req.body;
  await dbConnect();

  let filteredBody = {};

  if (firstName) {
    filteredBody['firstName'] = firstName;
  }

  if (lastName) {
    filteredBody['lastName'] = lastName;
  }

  if (username) {
    filteredBody['username'] = username;
  }

  if (role) {
    filteredBody['role'] = role;
  }

  const updatedUser = await User.findByIdAndUpdate(userId, filteredBody, {
    multi: false,
    runValidators: true,
    omitUndefined: true
  });
  console.log(updatedUser);
  res.status(200).json({ success: true });
});
export default handler;
