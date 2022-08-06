# IP Analyzer

![GitHub repo size](https://img.shields.io/github/repo-size/alefeans/ip-analyzer?style=for-the-badge)
![Github open issues](https://img.shields.io/github/issues/alefeans/ip-analyzer?style=for-the-badge)

## Overview

`IP Analyzer` was created to simplify the access of information about public IP addresses. It uses some famous IP scanners (right now only [AbuseIPDB](https://www.abuseipdb.com/) is being used), to unify all the information available about IP addresses into one simplified GraphQL schema.

Access [here](https://ip-analyzer.vercel.app/) to play with the `IP Analyzer` frontend or interact directly with the GraphQL API [here](https://ip-analyzer-server.vercel.app/graphql).

## Stack

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skills.thijs.gg/icons?i=ts,react,vite,express,graphql,jest,vercel&theme=dark" />
  </a>
</p>

## Usage

### Installing the Dependencies

The following global dependencies are required:

- Node.JS 16.x
- Yarn or NPM

To install the local dependencies:

```sh
yarn install:client
yarn install:server
```

### Start 

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
