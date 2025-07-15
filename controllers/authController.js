const User = require('../models/User');
const Token = require('../models/Token');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const emailService = require('../services/emailService');
const {
    generateToken
} = require('../services/tokenService');

exports.login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        const user = await User.findByEmail(email);

        if (!user) {
            return res.status(401).json({
                message: 'Email ou mot de passe incorrect'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: 'Email ou mot de passe incorrect'
            });
        }

        if (!user.is_active) {
            return res.status(403).json({
                message: 'Votre compte est désactivé. Contactez l\'administrateur.'
            });
        }

        const token = generateToken(user);
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.register = async (req, res) => {
    try {
        const {
            email,
            password,
            first_name,
            last_name,
            phone,
            address
        } = req.body;

        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({
                message: 'Cet email est déjà utilisé'
            });
        }

        const user = await User.create({
            email,
            password,
            first_name,
            last_name,
            phone,
            address
        });

        // Envoyer un email de bienvenue
        await emailService.sendWelcomeEmail(user.email, user.first_name);

        res.status(201).json({
            message: 'Compte créé avec succès'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const {
            email
        } = req.body;
        const user = await User.findByEmail(email);

        if (!user) {
            return res.status(404).json({
                message: 'Aucun utilisateur avec cet email'
            });
        }

        // Générer un code à 5 chiffres
        const resetCode = Math.floor(10000 + Math.random() * 90000).toString();

        // Stocker le code dans la base de données
        await Token.createResetCode(user.id, resetCode);

        // Envoyer l'email avec le code
        await emailService.sendResetPasswordEmail(user.email, resetCode);

        res.json({
            message: 'Un email avec un code de réinitialisation a été envoyé',
            userId: user.id // On retourne l'ID pour l'étape suivante
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const {
            userId,
            code,
            newPassword
        } = req.body;

        // Vérifier le code
        const codeRecord = await Token.findResetCode(userId, code);
        if (!codeRecord) {
            return res.status(400).json({
                message: 'Code invalide ou expiré'
            });
        }

        // Mettre à jour le mot de passe
        await User.updatePassword(userId, newPassword);

        // Supprimer le code utilisé
        await Token.deleteResetCode(userId);

        res.json({
            message: 'Mot de passe mis à jour avec succès'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.logout = async (req, res) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        // Solution simple sans blacklist
        res.json({
            message: 'Déconnexion réussie - Supprimez le token côté client'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};