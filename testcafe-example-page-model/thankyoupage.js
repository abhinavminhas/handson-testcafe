import { Selector, t } from "testcafe";

const headThankYou = Selector('h1#article-header');

class ThankYouPage{
    constructor() {
    }

    async IsSubmitted () {
        var submissionTextValue = 'Thank you, Peter Parker!';
        await t
            .expect(headThankYou.innerText).eql(submissionTextValue);
    }
}

export default new ThankYouPage();