import fs from 'fs';

(async function () {
    const titles = fs.readFileSync('./folders/titles.json', 'utf-8');
    const titleJSON = JSON.parse(titles);

    let titleArray = [];

    await titleJSON.map((title) => {
        titleArray.push({
            id: title.id,
            title: title.titulo,
            genero: title.genero,
        });
    });

    console.log("Array de títulos:", titleArray);

    const generoCount = {};
    titleArray.forEach((item) => {
        generoCount[item.genero] = (generoCount[item.genero] || 0) + 1;
    });

    let favorito = null;
    let maxCount = 0;
    for (const genero in generoCount) {
        if (generoCount[genero] > maxCount) {
            maxCount = generoCount[genero];
            favorito = genero;
        }
    }

    console.log("Gênero favorito:", favorito, "→", maxCount, "ocorrências");
})();
