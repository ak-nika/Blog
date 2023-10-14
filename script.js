let userInfo = [];
    let one = document.getElementById("fname");
    let two = document.getElementById("lname");
    let three = document.getElementById("number");
    let four = document.getElementById("email");
    let five = document.getElementById("password");

    // one.focus();

    if (localStorage.getItem("userInfo") === null) {
        localStorage.setItem("userInfo", "[]")
    }

    function signUp() {
        let fname =  one.value;
        let lname = two.value;
        let number = Number(three.value);
        let email = four.value;
        let password = five.value;

        if (fname && lname && email && !isNaN(number) && password){
            userInfo.push({fname, lname, number, email, password});
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }

        if (email === userInfo.email) {
            alert("You already have an account")
        }

        // let userObj = {
        //     fname,
        //     lname,
        //     number,
        //     email,
        //     password
        // }
        // // console.log(userObj)
        // let storedArray = localStorage.getItem("userInfo");
        // // console.log(storedArray)
        // let parsedArr = JSON.parse(storedArray);
        // // console.log(parsedArr2)
        // let userInfo2 = [...parsedArr, userObj];
        // localStorage.setItem("userInfo", JSON.stringify(userInfo2));
        // alert("Sign up succesful");
        window.location.href = "sing up.html";
    }

// let fname =  one.value;
//     let lname = two.value;
//     let number = Number(three.value);
//     let email = four.value;
//     let password = five.value;

// function signUp() {
//     let fname =  one.value;
//     let lname = two.value;
//     let number = Number(three.value);
//     let email = four.value;
//     let password = five.value;

//     let userObj = {
//         fname,
//         lname,
//         number,
//         email,
//         password
//     }

//     let storedArray = localStorage.getItem("userInfo");
//     let parsedArr = JSON.parse(storedArray);
//     userInfo = [...parsedArr, userObj];
//     localStorage.setItem("userInfo", JSON.stringify(userInfo));
//     window.location.href = "sing up.html";

//         // one.focus();
//         // one.value = "";
//         // two.value = "";
//         // three.value = "";
//         // four.value = "";
//         // five.value = "";
// }

// function editDetails() {
//     let storedArray = localStorage.getItem("userInfo");
//     let parsedArr = JSON.parse(storedArray);
//     let fname = prompt("Enter new First Name: ", parsedArr.fname);
//     let lname = prompt("Enter new Last Name: ", parsedArr.lname);
//     let number = prompt("Enter new Phone Number: ", parsedArr.number);
//     let email = prompt("Enter new Email Adress: ", parsedArr.email);
//     let password = prompt("Enter new Password: ", parsedArr.password);

//     let newObj = {
//         fname,
//         lname,
//         number,
//         email,
//         password
//     }

//     parsedArr = newObj;
//     localStorage.setItem("userInfo", JSON.stringify(parsedArr));
//     window.location.href = "sing up.html";
// }

function editDetails() {
    let storedArray = localStorage.getItem("userInfo");
    let parsedArr = JSON.parse(storedArray);
    console.log(parsedArr.fname);
    let fname = prompt("Enter new First Name: ", parsedArr.fname);
    let lname = prompt("Enter new Last Name: ", parsedArr.lname);
    let number = prompt("Enter new Phone Number: ", parsedArr.number);
    let email = prompt("Enter new Email Adress: ", parsedArr.email);
    let password = prompt("Enter new Password: ", parsedArr.password);

    let newObj = {
        fname,
        lname,
        number,
        email,
        password
    }

    parsedArr = newObj;
    localStorage.setItem("userInfo", JSON.stringify(parsedArr));
    window.location.href = "log in.html";
}

// document.getElementById("logIn").addEventListener("click", 
 function logIn() {
    const enteredEmail = document.getElementById("emails").value;
    const enteredPassword = document.getElementById("passwords").value;
 
    const storedUsers = JSON.parse(localStorage.getItem("userInfo"));

    if (storedUsers && Array.isArray(storedUsers)) {
        const matchedUser = storedUsers.find((user) => {
          return user.email === enteredEmail && user.password === enteredPassword;
        });
    
        if (matchedUser) {
          alert("Login successful!");
          localStorage.setItem("currUser",JSON.stringify(matchedUser))
          window.location.href = "dashboard.html";
        } else {
          alert("Invalid email or password. Please try again.");
        }
      } else {
        alert("No user data found. Please register.");
      }
}