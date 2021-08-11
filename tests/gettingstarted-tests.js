import ExamplePage from '../testcafe-example-page-model/examplepage';

const url = "http://devexpress.github.io/testcafe/example";
fixture ('Getting Started').page(url)

test('POPULATE INPUT', async t => {
    await t.maximizeWindow();
    await ExamplePage.populate("Hello World!!");
});

test('SELECT FEATURES', async t => {
    await t.maximizeWindow();
    await ExamplePage.selectAllFeatures();
});

test('SET OS', async t => {
    await t.maximizeWindow();
    await ExamplePage.selectOperatingSystem("Windows");
});

test('SELECT TEST CAFE INTERFACE', async t => {
    await t.maximizeWindow();
    await ExamplePage.selectTestCafeInterface("JavaScript API");
});

test('ENTER FEEDBACK COMMENTS', async t => {
    await t.maximizeWindow();
    await ExamplePage.provideFeedback("Awesome !!");
});