"use strict";

var userMenuItems = {
    i1: {
        caption: "Login",
        handler: "proceedLogin",
        handler: function (event) {
            userData.loginName = "Test user";
            document.querySelector('#userGreeting').textContent="Hi, "+userData.loginName;
            populateUserMenu();
        },
        availability: 0
    },
    i2: {
        caption: "My account",
        handler: function (event) {
            console.log(event);
        },
        availability: 1
    },
    i3: {
        caption: "Orders",
        handler: function (event) {
            console.log(event);
        },
        availability: 1
    },
    i4: {
        caption: "Log out",
        handler: function (event) {
            userData.loginName = "";
            document.querySelector('#userGreeting').textContent="Please, log in";
            populateUserMenu();
        },
        availability: 1
    }
}

var userData = {
    loginName: "",
    loginToken: ""
}
