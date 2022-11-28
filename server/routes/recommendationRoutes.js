const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions, ensureActive } = require('../middleware/authentication');

const {
    createRecommendation,
    editRecommendation,
    getAllRecommendations,
    getRecommendation,
    deleteRecommendation,
} = require('../controllers/recommendationController');

const admRoles = [ roles.ADMIN, roles.MNGR, roles.MNGR1, roles.MNGR2 ];

router.get('/', getAllRecommendations);
router.get('/:id', getRecommendation);
router.post('/', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, createRecommendation);
router.post('/:id', authenticateUser, authorizePermissions(...admRoles), 
    ensureActive, editRecommendation);
router.delete('/:id', authenticateUser, authorizePermissions(...admRoles),
    ensureActive, deleteRecommendation)

module.exports = router;