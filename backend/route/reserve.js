import express from 'express'
import { deleteReserve, getReserver, postReserver } from '../controllers/reserveController.js'
import { isAuthorized } from '../middleware/isAuthorized.js'

const router = express.Router()

router.route('/reserve').post(isAuthorized,postReserver)
router.route('/reservedSlots').get(getReserver)
router.route('/reserve/:id').delete(deleteReserve)

export default router
