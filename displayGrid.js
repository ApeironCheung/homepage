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

    let json = load3Dmodels().models;
    let description = "These are my 3D models rendered as videos.";

    if (mode === 1) {
        json = loadAnimations().animations;
        description = "These are my 3D animations rendered as videos.";
    }

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

