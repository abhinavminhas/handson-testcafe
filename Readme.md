# **Getting Started - Testcafe**
>[TestCafe](https://testcafe.io/)

>*Ensure [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) are installed.*
>*[Install TestCafe](https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe)*

#### Install Dependencies
>```
>npm install
>````

#### Run All Tests (local browsers)
>````
>npx testcafe edge Tests/
>npx testcafe chrome Tests/
>npx testcafe firefox Tests/
>````

#### Run All Tests (local browsers) - Headless
>````
>npx testcafe edge:headless Tests/
>npx testcafe chrome:headless Tests/
>npx testcafe firefox:headless Tests/
>````