"use strict";

const $ = require('jquery');

$(document).ready(() => {
    $("body").append("<h1>Require jQuery is working</h1>");
});

let sayHello = (greeting) => {
    console.log(greeting)
};
sayHello("Hello");