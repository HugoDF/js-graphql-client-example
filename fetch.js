const graphql = require('graphql.js');

const graph = graphql('https://graphql-pokemon.now.sh/');

const query = graph(`{
    pokemon(name: "Pikachu") {
        attacks {
            special {
                name
            }
        }
    }
}`);

if (require.main === module) {
  query().then(
    res => console.log(JSON.stringify(res, null, 2)),
    err => console.error(err)
  );
}

module.exports = {
  query
};
