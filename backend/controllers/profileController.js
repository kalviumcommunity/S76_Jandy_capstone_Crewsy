const User = require('../models/user');

// GET /api/profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


// PUT /api/profile
exports.updateProfile = async (req, res) => {
  const { firstName, lastName, bio, role } = req.body;
  const profilePhoto = req.file ? `/uploads/${req.file.filename}` : undefined;

  const updates = { firstName, lastName, bio, role };
  if (profilePhoto) updates.profilePhoto = profilePhoto;

  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-password');

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
