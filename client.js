const { query } =require('./fetch');

$output = document.querySelector('.output');

query().then(
    res => {
        $output.innerHTML = `<pre><code>${JSON.stringify(res, null, 2)}</code></pre>`;
    },
    err => console.error(err)
)