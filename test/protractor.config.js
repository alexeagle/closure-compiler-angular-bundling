exports.config = {
  specs: [
    '../built/test/*.e2e-spec.js'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox'],
      binary: process.env.CHROME_BIN,
    }
  },
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine',
  useAllAngular2AppRoots: true
};
