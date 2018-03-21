"use strict";

function addMenuItem(menuItem, userMenuBlock) {
    
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent=menuItem.caption;
    a.addEventListener('click',menuItem.handler);
    li.appendChild(a);
    userMenuBlock.appendChild(li);
    
    
}

function populateUserMenu() {
    var loggedIn = (userData.loginName == "") ? false : true;
    var userMenuBlock = document.querySelector('#userMenuBlock');

    while(userMenuBlock.childNodes.length-1) {
        userMenuBlock.removeChild(userMenuBlock.childNodes[1])
    }
   
    for (var i = 1; i <= Object.keys(userMenuItems).length; i++) {
        var menuItem = eval("userMenuItems.i" + i);
        if ((loggedIn && menuItem.availability == 1) || (!loggedIn && menuItem.availability == 0)) {
            addMenuItem(menuItem, userMenuBlock);
        }
    }

}

populateUserMenu();
