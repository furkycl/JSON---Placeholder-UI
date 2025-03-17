/* 
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json)) */

const usersInformation = async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  }

usersInformation().then((users) => {
    users.forEach((user) => {
        usersRow.innerHTML += displayUser({usersname: user.name, userid: user.id, username: user.username, userstreet: user.address.street, usersuite: user.address.suite, 
            usercity: user.address.city, userzipcode: user.address.zipcode, usercompanyname: user.company.name, usercompanycatchphrase: user.company.catchPhrase,
            usercompanybs: user.company.bs, useremail: user.email, userphone: user.phone, userwebsite: user.website                      
        })
    });
});


const displayUser = ({
    usersname,
    userid,
    username,
    userstreet,
    usersuite,
    usercity,
    userzipcode,
    usercompanyname,
    usercompanycatchphrase,
    usercompanybs,
    useremail,
    userphone,
    userwebsite
}) => `
    <div class="card col-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title" id="userName">${usersname}</h5>
            <p id="userId">${userid}</p>
            <h6 class="card-subtitle mb-2 text-body-secondary"><i class="fa-solid fa-user"></i>Temel Bilgiler </h6>
            <p id="userName">${usersname}</p>
            <p id="userUserName">${username}</p>
            <h6 class="card-subtitle mb-2 text-body-secondary"><i class="fa-solid fa-location-dot"></i>Adres</h6>
            <p id="userStreet">${userstreet}</p>
            <p id="userSuite">${usersuite}</p>
            <p id="userCity">${usercity}</p>
            <p id="userZipcode">${userzipcode}</p>
            <h6 class="card-subtitle mb-2 text-body-secondary"><i class="fa-solid fa-building"></i>Company</h6>
            <p id="userCompanyName">${usercompanyname}</p>
            <p id="userCompanyCatchPhrase">${usercompanycatchphrase}</p>
            <p id="userCompanyBs">${usercompanybs}</p>
            <h6 class="card-subtitle mb-2 text-body-secondary"><i class="fa-solid fa-address-book"></i>İletisim</h6>
            <p id="userEmail">${useremail}</p>
            <p id="userPhone">${userphone}</p>
            <p id="userWebsite">${userwebsite}</p>
            <a href="posts.html">Gönderileri Görüntüle</a>
        </div>
    </div>`;
