const fs = require("fs");

module.exports = {
  async load() {
    let files = [];
    const filenames = fs.readdirSync("./data");

    for (let filename of filenames)
      files.push(JSON.parse(fs.readFileSync(`./data/${filename}`)));

    return files;
  },
  save(user) {
    function getFileName() {
      const d = new Date();
      return `data/${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}.json`;
    }

    fs.writeFile(getFileName(), user, (e) => {
      if (e) return { error: "Erro ao salvar o arquivo." };
      else return {};
    });
  },
};