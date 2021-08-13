import ExamplePage from '../testcafe-example-page-model/example-page';
import ThankYouPage from '../testcafe-example-page-model/thankyou-page';

const url = "http://devexpress.github.io/testcafe/example";
fixture ('Getting Started')
.page(url)
.beforeEach(async t => {
    await t.maximizeWindow();
})

test('E2E', async t => {
    await ExamplePage.populate("Hello World!!");
    await ExamplePage.selectAllFeatures();
    await ExamplePage.selectOperatingSystem("Windows");
    await ExamplePage.selectTestCafeInterface("JavaScript API");
    await ExamplePage.provideFeedback(10, "Awesome !!");
    await ExamplePage.submitFeedback();
    await ThankYouPage.isSubmitted();
});