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
        output += `
            <div class="grid-item">
                <iframe 
                    src="https://www.youtube.com/embed/${item.id}" 
                    frameborder="0" 
                    allowfullscreen
                ></iframe>
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
    const container = document.getElementById("grid");
    const desc = document.getElementById("description");

    if (!container || !desc) return;

    let jsonData = loadYouTube();
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
            output += `
                <div class="video-block">
                    <iframe 
                        src="https://www.youtube.com/embed/${item.id[j]}" 
                        frameborder="0" 
                        allowfullscreen
                    ></iframe>
                </div>`;
        }

        output += `
            </div>
        </div>`;
    }

    container.innerHTML = output;
    desc.innerHTML = description; 
}
