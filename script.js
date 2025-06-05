function loadPage(){
    const data = loadSideBar();
    let button = data.buttons; 
    loadButtons(button);
    loadBanner(button);
}
function loadButtons(buttons) {
  let content = "";

  for (let i = 1; i < buttons.length; i++) {
    content += `<a href="#" onclick="handleButtonClick('${buttons[i].buttonPath}')">
                  <img src="${buttons[i].buttonImg}" alt="button${i}">
                </a><br>`;
  }

  const sidebarDiv = document.getElementById('sidebar'); // ← changed from 'content'
  if (sidebarDiv == null) return;

  sidebarDiv.innerHTML = content;
}

function loadBanner(buttons){
  const bannerDiv = document.getElementById('upper');
  if (!bannerDiv) return;

  const bannerPath = buttons[0].buttonImg;
  const bannerLink = buttons[0].buttonPath;

  bannerDiv.innerHTML = `
    <a href="#" onclick="handleButtonClick('${bannerLink}')">
      <img src="${bannerPath}" alt="banner">
    </a>`;
}
/*function changeContent(link){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<iframe src="${link}" style="width:100%; height:600px; border:none;"></iframe>`;
}*/
function handleButtonClick(url) {
    if (url.startsWith('http')) {
        window.open(url, '_blank');
    } else {
        // Assume there's an iframe in .content
        document.querySelector('.content').innerHTML = `<iframe src="${url}"></iframe>`;
    }
}

window.onload = function () {
  loadPage();      
  handleButtonClick("home.html"); 
};
