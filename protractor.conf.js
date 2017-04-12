exports.config = {
  specs: [
    'built/test/*.e2e-spec.js'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox']
    }
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  baseUrl: 'http://http-server:8080/',
  framework: 'jasmine',
  useAllAngular2AppRoots: true
};
