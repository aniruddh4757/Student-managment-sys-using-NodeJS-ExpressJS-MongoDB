import express from 'express'
import { getAllDoc, editDoc, createDoc, updateDocById, deleteById } from '../controllers/stuCont.js'

const router = express.Router()

router.get('/', getAllDoc)

router.post('/', createDoc)

router.get('/edit/:id', editDoc)

router.post('/update/:id', updateDocById)

router.post('/delete/:id', deleteById)


export default router