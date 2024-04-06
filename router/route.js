const express = require("express");
const router = express.Router();

const {getAccount, getAccountById, createAccount, deleteAccount} = require('../controller/account')

router.route('/').get(getAccount).post(createAccount)
router.route('/:id').get(getAccountById).delete(deleteAccount)

module.exports=router