const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

const { getProfile, updateProfile } = require('../controllers/profileController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${req.user.id}-${Date.now()}${ext}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png/;
    const isValid = allowed.test(path.extname(file.originalname).toLowerCase());
    cb(null, isValid);
  }
});

router.get('/', auth, getProfile);
router.put('/', auth, upload.single('profilePhoto'), updateProfile);

module.exports = router;
