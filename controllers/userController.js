const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, address, bio, profilePicture } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, address, bio, profilePicture },
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
