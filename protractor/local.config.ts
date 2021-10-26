import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
  },
  capabilities: {
    browserName: 'chrome',
    count: 1,
    chromeOptions: {
      args: ['--headless'],
    }
  }
};
