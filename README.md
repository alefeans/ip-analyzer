# IP Analyzer

![GitHub repo size](https://img.shields.io/github/repo-size/alefeans/ip-analyzer?style=for-the-badge)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=dark)
![Node.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=dark)
![Github open issues](https://img.shields.io/github/issues/alefeans/ip-analyzer?style=for-the-badge)

## Overview

`IP Analyzer` was created to simplify the access of information about an IP address. It uses some famous IP scanners (right now, it only uses [AbuseIPDB](https://www.abuseipdb.com/)), to unify all the information available about an IP into one simplified GraphQL schema.

Access [here](https://ip-analyzer.vercel.app/) to play with the `IP Analyzer` frontend or interact directly with the GraphQL API [here](https://ip-analyzer-server.vercel.app/graphql).

## Usage

### Installing Dependencies

You can use `npm` or `yarn`:

```sh
yarn install:client
yarn install:server
```

### Development

To start the services on development mode:

```sh
yarn dev:client
yarn dev:server
```

### Tests

To run the automated tests:

```sh
yarn test:client
yarn test:server
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
