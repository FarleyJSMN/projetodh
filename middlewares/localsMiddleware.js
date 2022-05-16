const express = require('express');

const localsMiddleware = (req, res, next)  => {

	if(req.session.cart != undefined){
		res.locals.cart = req.session.cart;
	}else{
		req.session.cart = [];
	}

	res.locals.logged = false;
	if (req.session.user != undefined) {
		res.locals.logged = true;
		res.locals.user = req.session.user;
    };
	next();
}
module.exports = localsMiddleware;