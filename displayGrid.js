function modelPage() {
  createPage(0);  
}
function animationPage(){
    createPage(1);
}
function createPage(mode) {
    const container = document.getElementById("grid");
    const desc = document.getElementById("description");
    
    if (!container || !desc) return;

    let jsonData = load3Dmodels();

    if (mode === 1) {
        jsonData = loadAnimations();
    }
    let json = jsonData.content;
    let description = jsonData.description[0].paragraph; 


    let output = "";
for (let i = 0; i < json.length; i++) {
    const item = json[i];
    const isUpload = item.upload === "true" || item.upload === true;

    output += `
        <div class="grid-item">`;

    if (isUpload) {
        output += `
            <video controls style="width: 100%;">
                <source src="${item.id}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
    } else {
        output += `
            <iframe 
                src="https://www.youtube.com/embed/${item.id}" 
                frameborder="0" 
                allowfullscreen
            ></iframe>`;
    }

    output += `
        <h3>${item.name}</h3>
        <p><strong>Year Made:</strong> ${item.year}</p>
        <p><strong>Software:</strong> ${item.software}</p>
        <p>${item.description}</p>
        </div>`;
}


    container.innerHTML = output;
    desc.innerText = description;
}
function createVideoPage() {
    videoPage(0);
}
function createHomePage() {
    videoPage(1);
}
function createAboutPage(){
    videoPage(2);
}
function videoPage(data) {
    const container = document.getElementById("grid");
    const desc = document.getElementById("description");

    if (!container || !desc) return;

    let jsonData = loadYouTube();
    if(data === 1){
        jsonData = homePage();
    }else if(data === 2){
        jsonData = aboutPage();
    }
    let playlists = jsonData.content;
    let description = jsonData.description[0].paragraph;

    let output = "";
    for (let i = 0; i < playlists.length; i++) {
        const item = playlists[i];
        const titles = item.videoTitles || [];

        output += `
        <div class="playlist-section" style="width: 100%;">
            <h3>${item.playlistName}</h3>
            <p>${item.description}</p>
            <div class="video-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">`;

        for (let j = 0; j < item.id.length; j++) {
            const isUpload = item.upload?.[j] === true;

             output += `
                <div class="video-block">`;
            if (isUpload) {
                output += `
                    <video controls>
                        <source src="${item.id[j]}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
            } else {
                output += `
                    <iframe 
                        src="https://www.youtube.com/embed/${item.id[j]}" 
                        frameborder="0" 
                        allowfullscreen
                    ></iframe>`;
            }
            output += `</div>`;
        }
        output += `
            </div>
        </div>`;
    }

    container.innerHTML = output;
    desc.innerHTML = description; 
}
