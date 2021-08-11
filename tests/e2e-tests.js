import ExamplePage from '../testcafe-example-page-model/examplepage';
import ThankYouPage from '../testcafe-example-page-model/thankyoupage';

const url = "http://devexpress.github.io/testcafe/example";
fixture ('Getting Started').page(url)

test('E2E', async t => {
    await t.maximizeWindow();
    await ExamplePage.Populate("Hello World!!");
    await ExamplePage.SelectAllFeatures();
    await ExamplePage.SelectOperatingSystem("Windows");
    await ExamplePage.SelectTestCafeInterface("JavaScript API");
    await ExamplePage.ProvideFeedback("Awesome !!");
    await ExamplePage.SubmitFeedback();
    await ThankYouPage.IsSubmitted();
});