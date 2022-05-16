const express = require('express');
const model = require('../model/model');
const path = require('path');
const bcrypt = require('bcryptjs');
const axios = require('axios');

function userCookie (req, res, next) {
    var losIDs = [...Array(10).keys()];
    var elID = 0;
    if ((req.originalUrl == '/') && (req.cookies.user != undefined) && !(req.session.user)){
    loop1:
    for(var i = 0; i < losIDs.length; i++){
        finded = bcrypt.compareSync( losIDs[i].toString(), req.cookies.user.toString()  );
        if (finded){
            elID = losIDs[i];
            break loop1;
        }
    }
        if (elID != 0){
        axios.get(`http://localhost:3030/api/users/fillCookie/${elID}`)
            .then(res => {
                const user = res.data.data;
                req.session.user = user;

                if(req.cookies.cart){
                    req.session.cart = JSON.parse(req.cookies.cart);
                }

               return next();
            })
            }
}else{ return next(); }

};

module.exports = userCookie;