const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
    return jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET, {
            expiresIn: '8h'
        }
    );
};

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};