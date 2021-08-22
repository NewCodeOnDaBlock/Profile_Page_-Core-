let clickedAccept = true;
let friendCount = 900;
let friendUpdate = document.querySelector(".friendlist-title");
let friendOne = document.querySelector(".list-1");
let friendTwo = document.querySelector(".list-2");
let friendThree = document.querySelector(".list-3");


/* ------------------------- Accept Friend Requet Function ---------------------*/

function acceptFriendOne(element){

    if(clickedAccept){

        element.remove();
        friendOne.remove();
        friendCount++;
        friendUpdate.innerText = "("+friendCount+")"+' '+ "Friends & Connections";
    }
}

function acceptFriendTwo(element){

    if(clickedAccept){

        element.remove();
        friendTwo.remove();
        friendCount++;
        friendUpdate.innerText = "("+friendCount+")"+' '+ "Friends & Connections";
    }
}
function acceptFriendThree(element){

    if(clickedAccept){

        element.remove();
        friendThree.remove();
        friendCount++;
        friendUpdate.innerText = "("+friendCount+")"+' '+ "Friends & Connections";
    }
}

/*------------------------------ Deny Friend Request Function -----------------------*/

let clickedDeny = true;

function denyFriendOne(element){

    if(clickedDeny){

        element.remove();
        friendOne.remove();
    }
}
function denyFriendTwo(element){

    if(clickedDeny){

        element.remove();
        friendTwo.remove();
    }
}
function denyFriendThree(element){

    if(clickedDeny){

        element.remove();
        friendThree.remove();
    }
}

/*----------------- Edit Usernames Function -------------------------*/

let profileName = document.querySelector(".profile-name");
let clickedEditProfile = true;

function changeUser(element){

    if(clickedEditProfile){

        profileName.innerText = "Raden Mantuano";  
        clickedEditProfile = false;
    }
    else if(!clickedEditProfile){

        profileName.innerText = "Raden.";
        clickedEditProfile = true;
    }
}
