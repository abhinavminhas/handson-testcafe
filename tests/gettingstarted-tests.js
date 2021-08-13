import ExamplePage from '../testcafe-example-page-model/example-page';

const url = "http://devexpress.github.io/testcafe/example";
fixture ('Getting Started')
.page(url)
.beforeEach(async t => {
    await t.maximizeWindow();
})

test('POPULATE INPUT', async t => {
    await ExamplePage.populate("Hello World!!");
});

test('SELECT FEATURES', async t => {
    await ExamplePage.selectAllFeatures();
});

test('SET OS', async t => {
    await ExamplePage.selectOperatingSystem("Windows");
});

test('SELECT TEST CAFE INTERFACE', async t => {
    await ExamplePage.selectTestCafeInterface("JavaScript API");
});

test('ENTER FEEDBACK COMMENTS', async t => {
    await ExamplePage.provideFeedback(10, "Awesome !!");
});