const User = require('../models/User');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await User.getAllClients();
        res.json(clients);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.updateUserStatus = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            is_active
        } = req.body;

        const user = await User.updateUserStatus(id, is_active);
        if (!user) {
            return res.status(404).json({
                message: 'Utilisateur non trouvé'
            });
        }

        res.json({
            message: `Utilisateur ${is_active ? 'activé' : 'désactivé'} avec succès`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};