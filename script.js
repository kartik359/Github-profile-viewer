const username = document.getElementById('username');
async function fetchdata(username) {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    displayData(data);
}

function displayData({
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url,
    created_at,
    updated_at
}) {
    if(!avatar_url)
    {
       document.getElementById('second').innerHTML=`<h1>User Not found</h1>`; 
       return ;
    }
    if(!bio)
    {
        bio=''
    }
    document.getElementById('second').innerHTML =`
          <div class="sleft">
          <img src='${avatar_url}' alt="image thi bhai" id="image">
          <div class="para">
          
            <p id="user">${name}</p>
          <p id="profession" >${bio}</p>
          <p id="created" style="margin-top:10px">created at : ${created_at}</p>
           <p id="created" style="margin-top:10px">updated at : ${updated_at}</p>
          </div>
          </div>
          <div class="sright">
            <div class="follower">
                <div class="follow_info">
                    <p id="blue">Follower</p>
                    <p>${followers}</p>
                </div>
                <div class="follow_info">
                    <p id="blue">Following</p>
                    <p>${following}</p>
                </div>
                <div class="follow_info">
                    <p id="blue">Repo</p>
                    <p>${public_repos}</p>
                </div>
            </div>
           
           <div class="profile">
            
            <button id="profile"><a href="${html_url}">view profile</a></button>
           </div>
           
          </div>`
}
document.getElementById('search').addEventListener('click', () => {
    let userid = username.value
    if (userid.trim() === '') {
        alert("username can not be empty")
    }
    else {
         fetchdata(userid);
    }

})