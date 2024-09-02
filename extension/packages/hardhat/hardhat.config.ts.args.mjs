export const imports = `import "./tasks"`;
export const solidityVersion = "0.8.16";
export const networks = `
    myFakeNetwork: {
      url: \`https://my-fake-networt.alchemyapi.io/v2/\${providerApiKey}\`,
      accounts: [deployerPrivateKey],
    },
    myFakeNetwork2: {
      url: \`https://my-fake-networt2.alchemyapi.io/v2/\${providerApiKey}\`,
      accounts: [deployerPrivateKey],
    }
`;
