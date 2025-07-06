import { connectToDatabase } from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { email, password } = req.body;
    const { db } = await connectToDatabase();
    const users = db.collection('users');
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email, plan: user.plan },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(200).json({
      success: true,
      token,
      user: { id: user._id, email: user.email, businessName: user.businessName, plan: user.plan, planLimits: user.planLimits }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
}
