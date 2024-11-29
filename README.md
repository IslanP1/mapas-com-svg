**Mapa de Localidades com SVG**
================================

**Bem-vindo!**
---------------

Bem-vindo ao Mapa de Localidades com SVG, uma aplicação que permite a visualização interativa de estados e municípios brasileiros através de mapas renderizados em SVG. Este projeto foi desenvolvido com foco em simplicidade, responsividade e eficiência, proporcionando uma experiência visual rica e amigável.

**Objetivo do Projeto**
------------------------

Permitir a navegação e visualização de localidades brasileiras de forma dinâmica. A aplicação utiliza HTML, CSS, JavaScript e uma integração com o banco de dados PostgreSQL (com extensão PostGIS) para oferecer mapas SVG interativos e personalizados.

**Funcionalidades**
-------------------

* Seleção dinâmica de estados e municípios.
* Renderização de mapas em SVG.
* Interface responsiva adaptada para diversos dispositivos.
* Consultas dinâmicas ao banco de dados geográfico.

**Tecnologias Utilizadas**
---------------------------

### Front-End

* **HTML5**: Estrutura semântica.
* **CSS3**: Estilização responsiva.
* **JavaScript**: Manipulação do DOM.

### Back-End

* **Node.js**: Servidor e API REST.
* **PostgreSQL + PostGIS**: Banco de dados espacial.

**Como Configurar o Projeto?**
------------------------------

### 1. Clonar o Repositório

```bash
git clone git@github.com:<seu-usuario>/mapas-com-svg.git
```

### 2. Configurar o Banco de Dados

1. Certifique-se de ter o PostgreSQL e o PostGIS instalados.
2. Importe os dados geográficos de estados e municípios.
3. Use `ST_AsSVG` para converter geometrias em caminhos SVG.

### 3. Configurar o Ambiente Node.js

1. Instale as dependências:
```bash
npm install
```
2. Configure o arquivo `.env` com os dados do banco:
```bash
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_HOST=
POSTGRES_PORT=
POSTGRES_DATABASE=

SERVER_PORT=
```
3. Inicie o servidor:
```bash
npm start
```

### 4. Acessar o Projeto

Abra o navegador e acesse: `http://localhost:server_port`.

**Exemplos de Uso**
--------------------

1. Escolha o estado desejado na lista.
2. Selecione um município.
3. Visualize o mapa SVG gerado dinamicamente.

**Ideias para Expansão**
-------------------------

* Integração com APIs externas para informações adicionais.
* Filtros avançados (população, área, etc.).
* Exportação dos mapas em PNG ou PDF.

**Contribuição**
----------------

Contribuições são bem-vindas! Abra issues ou envie pull requests com melhorias e novas ideias.

**Licença**
------------

Este projeto está licenciado sob a **MIT License**. Veja o arquivo `LICENSE` para mais detalhes.

**Desenvolvedor**
-------------------

* [Islan Oliveira](https://github.com/IslanP1)
  
Desenvolvido com ❤️ por uma pessoa apaixonada por mapas e tecnologia!
