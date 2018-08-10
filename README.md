# JavaScript GraphQL Example

Example consuming a GraphQL API from JavaScript using `graphql.js`. 

## See it live

[https://codewithhugo.com/js-graphql-client-example/](https://codewithhugo.com/js-graphql-client-example/)

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

### Locally

- Clone the repo

- Install dependencies
  ```sh
  $ npm install
  ```

- Run using parcel:
  ```sh
  $ npm start # or npx parcel index.html
  ```

- Open [http://localhost:1234](http://localhost:1234)
