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

    console.log(titleArray);
})();