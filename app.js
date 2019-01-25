//Init Github
const github = new Github
//Init UI
const ui = new UI

//Search input
const searchUser = document.getElementById('searchUser')

//Search input
searchUser.addEventListener('keyup', (e) =>{
//get input text
const userText = e.target.value

if(userText!== ''){
  //Make HTTP call
  github.getUser(userText)
  .then(data => {
    if(data.profile.message==='Not Found'){
      //show alert //shown through ui class
      ui.showAlert('User not found', 'alert alert-danger')

    }else{
      //Show profile //shown through ui class
      ui.showProfile(data.profile)
      ui.showRepos(data.repos)
    }
  })
  //console.log(userText)
}else{
  //clear profile //shown through ui class
  ui.clearProfile()
}

})