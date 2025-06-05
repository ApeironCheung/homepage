function loadSideBar() {
  return {
    "buttons": [
      { "buttonImg": "images/header.jpg", "buttonPath": "home.html" },
      { "buttonImg": "images/button_aboutMe.png", "buttonPath": "about.html" },
      { "buttonImg": "images/button_3DModel.png", "buttonPath": "model.html" },
      { "buttonImg": "images/button_animations.png", "buttonPath": "animation.html" },
      { "buttonImg": "images/button_spiritChannel.png", "buttonPath": "spiritChannel.html" },
      { "buttonImg": "images/button_itch.png", "buttonPath": "https://apeironcheung.itch.io" },
      { "buttonImg": "images/button_git.png", "buttonPath": "https://https://github.com/ApeironCheung" },
      { "buttonImg": "images/button_patreon.png", "buttonPath": "https://www.patreon.com/c/apeironcheung" }
    ]//"https://www.youtube.com/@Spirit-Channel-main"
  };
}

function load3Dmodels(){
  return{
    "description":[
      {"paragraph":"These are the 3D models I made in York U course DATT2500"}
    ],
    "content":[
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
      {"paragraph":"These are the animation I made in York U course DATT2501."}
    ],
    "content":[
      {"name": "Dropping Balls", "id" : "3lkUcmYStag", "year":"2021", "software":"Maya",
        "description" :"First homework of 3D animation course in York U, applying motion physics in animation."},
      {"name":"Taekwondo", "id":"8okUTD02UE8", "year":"2021", "software":"Maya",
        "description":"Second homework of 3D animation course in York U, applying rigging and human actions. Reference video: https://youtu.be/WmsWcCnFQbY"},
      {"name":"Video", "id":"yOlYfgLm0Cw", "year":"2021", "software":"Maya",
        "description":"Final project of 3D animation course in York U, theme is Covid life. Describing praying at church was banned and social life in zoom." }
    ]
  }
}
function loadYouTube(){
  return{
        "description":[
      {"paragraph":"Spirit Channel is a Cantonese channel with personal supernatural experience and explained in Philosophy and religious analysis.<br> {<a>https://www.youtube.com/@Spirit-Channel-main</a>}<br>Spirit Channel以哲學、宗教、物理等剖析超自然現象，內容包括個人靈異經驗及靈修者訪談。"}
    ],
    "content":[
      {"playlistName": "專題訪談", "description" : "專訪靈修者包括㦷奘、巴納等", 
        "id":["ZjDeR3Ri-Ww", "ipcKsAzqQDY","UvLkN-LrG1s", 
          "tjgpM2FgHco", "CgMne4M4bLc", "By0DuHMyMYw", "iXpga9Ajetc" ]},
            {"playlistName": "超自然個案", "description" : "以科學、哲學、宗教剖析超自然現象", 
        "id":["WezHPvWgcFo", "Gi_yw_0Towo", "CFjDJN4B6ys", "jq9bDug33qk", "Tb612yUcZSA" ]}
    ]
  }
}
