const { query, graph } =require('./fetch');

const $queryElement = document.querySelector('.query');
const $output = document.querySelector('.output');
const $submitButton = document.querySelector('button');

$submitButton.onclick = () => {
    const queryData = $queryElement.value;
    runQuery(graph(queryData))
}

runQuery(query);

function runQuery (query) {
    query().then(
        res => {
            $output.innerHTML = `<pre><code>${JSON.stringify(res, null, 2)}</code></pre>`;
        },
        err => {
            $output.innerHTML = `Error: <pre><code>${JSON.stringify(err, null, 2)}</code></pre>`;
        }
    )
}

