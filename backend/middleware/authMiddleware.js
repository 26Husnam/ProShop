import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

// Middleware to protect routes
 const protect = asyncHandler(async (req, res, next) => {
    let token;
    
    // Read token from cookies
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Find user by ID from the decoded token
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            console.error('Token verification failed:', error);
            res.status(401);
            throw new Error('Not authorized, token failed');
            
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }

});

// Middleware to check if user is admin
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403);
        throw new Error('Not authorized as an admin');
    }
};

export { protect, admin };
// This middleware checks if the user is authenticated and has admin privileges.