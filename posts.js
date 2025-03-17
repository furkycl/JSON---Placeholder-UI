const urlParams = new URLSearchParams(window.location.search);
let identification = urlParams.get("userId");
identification = prompt("Post id Giriniz.")
if(identification<1 || identification>10 || isNaN(identification) ){
  alert("1-10 değerleri dahil arada bir sayı değeri giriniz.");
  throw new Error("1-10 değerleri dahil arada bir sayı değeri giriniz.")
}

console.log(identification);

const postsRender = async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId="+identification);
  const data = await response.json();
  return data;
}

postsRender().then((posts) => {
  posts.forEach((post) => {
      postsRow.innerHTML += displayPosts({postsuserid: post.userId, postsid: post.id, poststitle: post.title, postsbody: post.body                      
      })
  });
});

const displayPosts = ({
  postsuserid,
  postsid,
  poststitle,
  postsbody
}) => `
  <div class="card col-3" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title" id="userName">User ID: ${postsuserid}</h5>
          <p id="userId">ID: ${postsid}</p>
          <h6 class="card-subtitle mb-2 text-body-secondary">Title</h6>
          <p id="userName">${poststitle}</p>
          <h6 class="card-subtitle mb-2 text-body-secondary">Body</h6>
          <p id="userStreet">${postsbody}</p>
      </div>
  </div>`;