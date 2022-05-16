const express = require('express');
const model = require('../model/model');
const path = require('path');
const bcrypt = require('bcryptjs');
const axios = require('axios');

function buynotLogged(req, res, next) {
    
    if(res.locals.cart.length > 0 && !(res.locals.logged)){
        req.session.cart = res.locals.cart;
        res.cookie('cart', JSON.stringify(req.session.cart));
    }else{
        if(res.locals.cart.length < 1){
            req.session.cart = [];
        }
    }
    return next();
    
};

module.exports = buynotLogged;