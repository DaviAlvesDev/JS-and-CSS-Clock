# ⏱️ CSS Clock

> Projeto#2 refatorado do curso [JavaScript30](https://javascript30.com) que simula um relógio analógico usando CSS e move os ponteiros com base na hora do usuário usando JavaScript/TypeScript
***
<p align="center">
  <a href="#-preview">Preview</a> • 
  <a href="#-ajustes-realizados">Ajustes</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-aprendizados">Aprendizados</a> •
  <a href="#️-licença">Licença</a> •
  <a href="#️-créditos">Créditos</a> 
</p>

## 📷 Preview
![Gif que mostra o funcionamento do relógio](./assets/Preview.gif)

## 🔧 Ajustes Realizados
- **Mudança de codebase:** Migração da codebase de JavaScript para TypeScript
- **Correção de bug:** Correção do bug de 'pulo' na transição (reset de graus) quando o ponteiro completava uma volta inteira (360º -> 0º)

## 🛠 Tecnologias
- **HTML5 / CSS3**
- **JavaScript** (codebase antiga)
- **TypeScript** (codebase atual) 

## 🚀 Como Executar
**1. Clonar o repositório:**
```bash
git clone https://github.com/DaviAlvesDev/JS-and-CSS-Clock.git
```
**2. Instalar as dependências:**
```bash
npm install
```
**3. Compilar o código em TypeScript:**
```bash
npm run build
```
**4. Abrir o projeto:** Abra o arquivo `index.html` no seu navegador ou utilize o comando `npm start`
***
🔗 **Se preferir não baixar o projeto:** [acesse-o hospedado no GitHub Pages](https://davialvesdev.github.io/JS-and-CSS-Clock/)

## 📝 Aprendizados
- Controle de transições pelo CSS + JS/TS
- Compreensão do CSS Cascade e do uso consciente de `!important` (important declarations)
- Manipulação de CSS Custom Properties `--*` usando JavaScript e TypeScript

## ⚖️ Licença
Este projeto está sob a licença MIT

## ✍️ Créditos
> Feito com ☕ por [@DaviAlvesDev](https://github.com/DaviAlvesDev)