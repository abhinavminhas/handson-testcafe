import { Selector, t } from "testcafe";

const inputYourName = Selector('#developer-name');
const buttonPopulate = Selector('#populate');
const checkboxSupportForTesting = Selector('#remote-testing');
const checkboxReUseJavaScript = Selector('#reusing-js-code');
const checkboxRunningTestInBackground = Selector('#background-parallel-testing');
const checkboxEmbedCI = Selector('#continuous-integration-embedding');
const checkboxAdvancedTraffic = Selector('#traffic-markup-analysis');
const radioWindows = Selector('#windows');
const radioMacOS = Selector('#macos');
const radioLinux = Selector('#linux');
const selectTestCafeInterface = Selector('#preferred-interface');
const checkboxTriedTestCafe = Selector('#tried-test-cafe');
const textareaFeedbackComments = Selector('#comments');
const submitButton = Selector('#submit-button');
const spanRateTestCafe = Selector('span[class*="ui-slider-handle"]');

class ExamplePage{
    constructor() {
    }
    
    async populate (value) {
        await t
            .typeText(inputYourName, value)
            .expect(inputYourName.value).eql(value)
            .setNativeDialogHandler(() => true)
            .click(buttonPopulate);
            await t.expect(inputYourName.value).eql('Peter Parker');
    }

    async selectAllFeatures () {
        await t
            .click(checkboxSupportForTesting)
            .click(checkboxReUseJavaScript)
            .click(checkboxRunningTestInBackground)
            .click(checkboxEmbedCI)
            .click(checkboxAdvancedTraffic);
    }
    
    async selectOperatingSystem(value) {
        if (value == "Windows") {
            await t.click(radioWindows);
        }
        else if (value == "MacOS") {
            await t.click(radioMacOS);
        }
        else if (value == "Linux") {
            await t.click(radioLinux);
        }
    }

    async selectTestCafeInterface(selectValue) {
        const options = selectTestCafeInterface.find('option')
        await t
        .click(selectTestCafeInterface)
        .click(options.withText(selectValue));
        await t.expect(selectTestCafeInterface.value).eql(selectValue);
    }

    async provideFeedback(rating, feedbackValue) {
        await t
        .click(checkboxTriedTestCafe)
        .click(spanRateTestCafe);
        for (let i=1; i<rating; i++){
            await t.pressKey('right');
        }
        await t.typeText(textareaFeedbackComments, feedbackValue);
        await t.expect(textareaFeedbackComments.value).eql(feedbackValue);
    }
    
    async submitFeedback() {
        await t
        .click(submitButton);
    }
}

export default new ExamplePage();