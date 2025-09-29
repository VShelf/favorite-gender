# 🎬 Projeto: Descobrindo o Gênero Favorito

Este projeto em **Node.js** analisa uma lista de títulos (séries, filmes, etc.) em formato JSON e identifica qual gênero aparece com mais frequência, mostrando o **gênero favorito**.

---

## 🚀 Funcionalidades

* Lê um arquivo `titles.json` contendo vários títulos.
* Cria um array simplificado apenas com `id`, `titulo` e `genero`.
* Conta quantas vezes cada gênero aparece.
* Retorna o **gênero favorito** e o número de ocorrências.

---

## 📂 Estrutura do Projeto

```
📁 projeto
 ┣ 📁 folders
 ┃ ┗ 📄 titles.json
 ┣ 📄 index.js
 ┗ 📄 README.md
```

---

## 📝 Exemplo de `titles.json`

```json
[
  {
    "id": "5d0878f4-0df3-4dbc-8f01-7eabc653c26a",
    "titulo": "Supernatural",
    "nota": "Melhor série que eu já assisti!",
    "stream": "max",
    "classificacao": "livre",
    "genero": "suspense",
    "status": "assistido",
    "tipo": "serie",
    "estrelas": "5",
    "image": "https://media.themoviedb.org/t/p/w220_and_h330_face/ovFzkkKknAo2SbM2DfOabxRvzmy.jpg",
    "background": "https://media.themoviedb.org/t/p/w500_and_h282_face/lirPqYLTtd6XZqGn4cS1wiesTq0.jpg",
    "sinopse": "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho."
  }
]
```

---

## ▶️ Como Executar

1. Instale o [Node.js](https://nodejs.org/).
2. Clone este repositório.
3. Adicione o arquivo `titles.json` dentro da pasta `folders/`.
4. Execute no terminal:

```bash
node index.js
```

---

## 📊 Exemplo de Saída

```
Array de títulos: [
  { id: '5d0878f4-0df3-4dbc-8f01-7eabc653c26a', title: 'Supernatural', genero: 'suspense' },
  { id: '...', title: '...', genero: 'comedia' }
]

Gênero favorito: suspense → 12 ocorrências
```

---

## 📌 Tecnologias Utilizadas

* Node.js
* JavaScript (ES6+)
* JSON

---

✍️ Desenvolvido para estudos e organização de dados de séries/filmes.
