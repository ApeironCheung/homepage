function loadSideBar() {
  return {
    "buttons": [
      { "buttonImg": "images/header.jpg", "buttonPath": "home.html" },
      { "buttonImg": "images/button_aboutMe.jpg", "buttonPath": "about.html" },
      { "buttonImg": "images/button_3DModel.jpg", "buttonPath": "model.html" },
      { "buttonImg": "images/button_animations.jpg", "buttonPath": "animation.html" },
      { "buttonImg": "images/button_itch.jpg", "buttonPath": "https://apeironcheung.itch.io" },
      { "buttonImg": "images/button_git.jpg", "buttonPath": "https://https://github.com/ApeironCheung" },
      { "buttonImg": "images/button_patreon.jpg", "buttonPath": "https://www.patreon.com/c/apeironcheung" },
      { "buttonImg": "images/button_spiritChannel.jpg", "buttonPath": "https://www.youtube.com/@Spirit-Channel-main" }
    ]
  };
}

function load3Dmodels(){
  return{
    "description":[
      {"content":""}
    ],
    "models":[
      {"name": "Honda Civic", "id" :"82FLoqlvvpI", "year":"2020", "software":"Maya",
        "description" : "First homework of 3D modeling course in York U, exercising extrude and other basic functions."},
      {"name": "Shark", "id":"Vcjfl2ALfr8", "year":"2020", "software":"Maya",
        "description": "Second homework of 3D modeling course in York U, using reference pictures to modeling precisely."},
      {"name": "Goku", "id":"FI4AxjqRYoc", "year":"2020", "software":"Maya",
        "description":"Final project of 3D modeling course in York U, applied rendering technique to self made model."
      }
    ]
  };
}
function loadAnimations(){
  return{
        "description":[
      {"content":""}
    ],
    "animations":[
      {"name": "Dropping Balls", "id" : "3lkUcmYStag", "year":"2021", "software":"Maya",
        "description" :"First homework of 3D animation course in York U, applying motion physics in animation."},
      {"name":"Taekwondo", "id":"8okUTD02UE8", "year":"2021", "software":"Maya",
        "description":"Second homework of 3D animation course in York U, applying rigging and human actions. Reference video: https://youtu.be/WmsWcCnFQbY"},
      {"name":"Video", "id":"yOlYfgLm0Cw", "year":"2021", "software":"Maya",
        "description":"Final project of 3D animation course in York U, theme is Covid life. Describing praying at church was banned and social life in zoom." }
    ]
  }
}
