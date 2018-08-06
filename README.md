# JavaScript GraphQL Example

Example consuming a GraphQL API from JavaScript using `graphql.js`. 

## Run Node script

```sh
$ npm install
```

```sh
$ node fetch.js
{
  "pokemon": {
    "attacks": {
      "special": [
        {
          "name": "Discharge"
        },
        {
          "name": "Thunder"
        },
        {
          "name": "Thunderbolt"
        }
      ]
    }
  }
}
```

## Run client-side app

```sh
$ npm install
```

Run using parcel:
```sh
$ npm start # or npx parcel index.html
```

Open [http://localhost:1234](http://localhost:1234)