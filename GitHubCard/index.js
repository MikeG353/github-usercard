const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];


/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


axios.get(`https://api.github.com/users/MikeG353`)


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
.then((response) => {
  console.log(response);
  const newCard = makeCard(response);
  let cardContainter = document.querySelector('.cards');
  cardContainter.appendChild(newCard);
})

.catch((error) =>{
  console.log(error);
})  

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
for(i=0; i<followersArray.length; i++){
  axios.get(`https://api.github.com/users/${followersArray[i]}`)
 .then((response) => {
   console.log(response);
  const newCard = makeCard(response);
  let cardContainter = document.querySelector('.cards');
  cardContainter.appendChild(newCard);
 })


  .catch((error) => {
    console.log(error)
  })
}






/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function makeCard(object){

  //create elements
  const gitCard = document.createElement('div');
  const gitUserImg = document.createElement('img');
  const gitCardInfo = document.createElement('div');
  const gitName = document.createElement('h3');
  const gitUsername = document.createElement('p');
  const gitLocation = document.createElement('p');
  const gitProfile = document.createElement('p');
  const gitAddress = document.createElement('a');
  const gitFollowers = document.createElement('p');
  const gitFollowing = document.createElement('p');
  const gitBio = document.createElement('p');

  // apply calsses
  gitCard.classList.add('card');
  gitCardInfo.classList.add('card-info');
  gitName.classList.add('name');
  gitUsername.classList.add('username');
      
  // add content
  gitUserImg.src = object.data.avatar_url;
  gitName.textContent = `${object.data.name}`;
  gitUsername.textContent = `${object.data.login}`;
  gitLocation.textContent = `${object.data.location}`;
  gitProfile.textContent = `Profile: \n`;
  gitAddress.href = object.data.html_url;
  gitAddress.textContent = `${object.data.html_url}`;
  gitFollowers.textContent = `${object.data.followers}`;
  gitFollowing.textContent = `${object.data.following}`;
  gitBio.textContent = `${object.data.bio}`;
  

  //add structure
  gitCard.appendChild(gitUserImg);
  gitCard.appendChild(gitCardInfo);
  gitCardInfo.appendChild(gitName);
  gitCardInfo.appendChild(gitUsername);
  gitCardInfo.appendChild(gitLocation);
  gitCardInfo.appendChild(gitProfile);
  gitProfile.insertAdjacentHTML("beforeend", gitAddress);
  gitCardInfo.appendChild(gitFollowers);
  gitCardInfo.appendChild(gitFollowing);
  gitCardInfo.appendChild(gitBio);




  //return component
  return gitCard;       
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
