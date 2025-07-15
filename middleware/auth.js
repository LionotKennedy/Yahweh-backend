const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({
            message: 'Accès non autorisé - Token manquant'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Token invalide'
        });
    }
};

exports.checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({
                message: 'Accès interdit - Permissions insuffisantes'
            });
        }
        next();
    };
};