import { browser, element, by } from 'protractor';
import * as moment from 'moment';

describe('E2E Tests', function () {
  it('should display: Hello world!', function () {
    browser.get('');
    const div = element(by.css('div'));
    const day = moment().format('dddd');

    div.getText().then(t => expect(t).toEqual(`Happy ${day}`));
    element(by.css('input')).sendKeys('!');
    div.getText().then(t => expect(t).toEqual(`Happy ${day}!`));
  });
});
