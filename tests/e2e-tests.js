import ExamplePage from '../testcafe-example-page-model/examplepage';
import ThankYouPage from '../testcafe-example-page-model/thankyoupage';

const url = "http://devexpress.github.io/testcafe/example";
fixture ('Getting Started').page(url)

test('E2E', async t => {
    await t.maximizeWindow();
    await ExamplePage.populate("Hello World!!");
    await ExamplePage.selectAllFeatures();
    await ExamplePage.selectOperatingSystem("Windows");
    await ExamplePage.selectTestCafeInterface("JavaScript API");
    await ExamplePage.provideFeedback(10, "Awesome !!");
    await ExamplePage.submitFeedback();
    await ThankYouPage.isSubmitted();
});