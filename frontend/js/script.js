const API_BASE = "http://localhost:3001/api";

// Elementos DOM
const estadoDropdown = document.getElementById("estado");
const municipioDropdown = document.getElementById("municipio");
const mapaSvgContainer = document.getElementById("mapa-svg");

// Função para carregar os estados
async function carregarEstados() {
    try {
        const response = await fetch(`${API_BASE}/estados`);
        const estados = await response.json();
        estados.sort((a, b) => a.nome.localeCompare(b.nome)); 

        estados.forEach((estado) => {
            const option = document.createElement("option");
            option.value = estado.id;
            option.textContent = estado.nome;
            estadoDropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar estados:", error);
    }
}

// Função para carregar os municípios com base no estado selecionado
async function carregarMunicipios(estadoId) {
    try {
        const response = await fetch(`${API_BASE}/municipios/${estadoId}`);
        const municipios = await response.json();
        municipioDropdown.innerHTML = '<option value="">Selecione um município</option>';
        municipioDropdown.disabled = false;

        municipios.forEach((municipio) => {
            const option = document.createElement("option");
            option.value = municipio.id;
            option.textContent = municipio.nome;
            municipioDropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar municípios:", error);
    }
}

// Função para carregar o SVG do estado
async function carregarMapa(estadoNome, municipioNome) {
    try {
        const response = await fetch(`${API_BASE}/mapa/${estadoNome}/${municipioNome}`);
        const data = await response.json();

        const viewBox = data.viewBox;
        const pathEstado = data.pathestado;
        const pathMunicipio = data.pathmunicipio;

        console.log(pathMunicipio)


        // Criando o elemento SVG dinamicamente
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg"); 
        svgElement.setAttribute("viewBox", viewBox); 

        // Criando o caminho do estado
        const pathElementEstado = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElementEstado.setAttribute("d", pathEstado); 
        pathElementEstado.setAttribute("fill", "green"); 
        pathElementEstado.setAttribute("stroke", "red"); 
        pathElementEstado.setAttribute("stroke-width", "0.001"); 
       
        // Criando o caminho do município
        const pathElementMunicipio = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElementMunicipio.setAttribute("d", pathMunicipio); 
        pathElementMunicipio.setAttribute("fill", "red"); 
        pathElementMunicipio.setAttribute("stroke", "red"); 
        pathElementMunicipio.setAttribute("stroke-width", "0.001"); 
        
        // Adicionando os caminhos ao SVG
        svgElement.appendChild(pathElementEstado);
        svgElement.appendChild(pathElementMunicipio);

        // Limpando o conteúdo anterior do contêiner e inserindo o novo SVG
        mapaSvgContainer.innerHTML = ''; 
        mapaSvgContainer.appendChild(svgElement);

    } catch (error) {
        console.error("Erro ao carregar o mapa:", error);
        mapaSvgContainer.textContent = "Não foi possível carregar o mapa.";
    }
}

// Eventos
estadoDropdown.addEventListener("change", (e) => {
    const estadoId = e.target.value;
    if (estadoId) {
        carregarMunicipios(estadoId);
        municipioDropdown.disabled = true;
        mapaSvgContainer.textContent = "Selecione um município para exibir o mapa.";
    } else {
        municipioDropdown.innerHTML = '<option value="">Selecione um município</option>';
        municipioDropdown.disabled = true;
    }
});

municipioDropdown.addEventListener("change", (e) => {
    const municipioNome = e.target.options[e.target.selectedIndex].textContent;
    const estadoNome = estadoDropdown.options[estadoDropdown.selectedIndex].textContent;

    if (municipioNome && estadoNome) {
        carregarMapa(estadoNome, municipioNome);
    } else {
        mapaSvgContainer.textContent = "Selecione um município para exibir o mapa.";
    }
});

carregarEstados();