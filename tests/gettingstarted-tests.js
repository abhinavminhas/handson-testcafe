import ExamplePage from '../testcafe-example-page-model/examplepage';

const url = "http://devexpress.github.io/testcafe/example";
fixture ('Getting Started').page(url)

test('POPULATE INPUT', async t => {
    await t.maximizeWindow();
    await ExamplePage.Populate("Hello World!!");
});

test('SELECT FEATURES', async t => {
    await t.maximizeWindow();
    await ExamplePage.SelectAllFeatures();
});

test('SET OS', async t => {
    await t.maximizeWindow();
    await ExamplePage.SelectOperatingSystem("Windows");
});

test('SELECT TEST CAFE INTERFACE', async t => {
    await t.maximizeWindow();
    await ExamplePage.SelectTestCafeInterface("JavaScript API");
});

test('ENTER FEEDBACK COMMENTS', async t => {
    await t.maximizeWindow();
    await ExamplePage.ProvideFeedback("Awesome !!");
});