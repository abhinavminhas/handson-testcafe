# **Getting Started - TestCafe**
>[TestCafe](https://testcafe.io/)<br />

>*Ensure [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) are installed.*

>#### **[AUT](http://devexpress.github.io/testcafe/example)**

#### Install Dependencies
>```
>npm install
>````

#### Run All Tests (local browsers)
- Edge/Chrome/Firefox
    >````
    >npx testcafe edge tests/
    >npx testcafe chrome tests/
    >npx testcafe firefox tests/
    >````

#### Run All Tests (local browsers) - Headless
- Edge/Chrome/Firefox - Headless
    >````
    >npx testcafe edge:headless tests/
    >npx testcafe chrome:headless tests/
    >npx testcafe firefox:headless tests/
    >````