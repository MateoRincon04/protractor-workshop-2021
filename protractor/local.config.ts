import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
	  framework: 'jasmine',
	    specs: [ '../test/google.spec.js' ],
	      seleniumAddress: 'http://localhost:4444/wd/hub',
        onPrepare: () => {
          reporter();
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
