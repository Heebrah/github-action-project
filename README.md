
## 🚀 Introduction to CI/CD with GitHub Actions

### 🔄 What is CI/CD?

**CI/CD** stands for **Continuous Integration** and **Continuous Deployment/Delivery** — a modern DevOps practice that automates the process of building, testing, and deploying code.

* **Continuous Integration (CI):**
  Developers regularly merge code changes into a shared repository. Each change is automatically verified by a build and test process, ensuring the codebase remains stable and functional.

* **Continuous Delivery (CD):**
  Every change that passes tests is automatically prepared for deployment. With continuous deployment, changes go directly to production without manual approval.

These practices help teams:

* Catch bugs early
* Ship updates faster
* Maintain high code quality
* Reduce manual intervention

---

### ⚙️ What is GitHub Actions?

**GitHub Actions** is a built-in CI/CD tool provided by GitHub. It allows you to **automate workflows** for your repository—like testing code, building apps, or deploying to servers—based on events such as code pushes, pull requests, or releases.

#### 🔧 Key Features:

* **Event-driven:** Trigger workflows on pushes, PRs, issues, tags, schedules, and more.
* **Matrix builds:** Test across different environments (e.g., Node.js versions).
* **Reusable workflows:** Share common automation across repositories.
* **Built-in and community actions:** Use or build modular automation steps.
* **Integration with GitHub ecosystem:** No need for external CI tools.

---

### 🛠️ A Simple CI Example with GitHub Actions

Here’s a basic CI workflow for a Node.js project:

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x, 16.x]

    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm test
```

✅ This example:

* Runs when code is pushed or a PR is opened against `main`.
* Checks out the code.
* Sets up Node.js.
* Installs dependencies and runs tests.

---

### 🎯 Why Use GitHub Actions for CI/CD?

* **No extra setup** if you're already using GitHub.
* **Scalable** across large projects and teams.
* **Secure and customizable** for various workflows.
* **Supports Docker, Python, Java, Node, and more.**




---

## 🚀 **Setting Up the Project (Simplified)**

### 1. **Initialize a GitHub Repository**

* Go to GitHub and **create a new repo**.
![caption](/img/1.new-repo.jpg)
* On your local machine, clone it:

  ```bash
  git clone https://github.com/your-username/your-repo.git
  cd your-repo
  ```
  ![caption](/img/3.clone-repo.jpg)

  

### 2. **Create a Simple Node.js App**

You’ll build a basic Express server:
![caption](/img/3.server.jpg)


#### Steps:

* Initialize the Node.js project:

  ```bash
  npm init -y
  npm install express
  ```
  

* Create a file called `index.js` with this content:

  ```js
  const express = require("express");
  const app = express();
  const port = process.env.PORT || 3000;

  app.get("/", (req, res) => {
    res.send("Hello World! From GitHub Actions 🚀");
  });

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
  ```

* Commit and push it to GitHub:

  ```bash
  git add .
  git commit -m "Add basic express app"
  git push origin main
  ```

---

## 🤖 **Write Your First GitHub Actions Workflow**

### 3. **Create Workflow File**

#### Structure:

* Make a folder: `.github/workflows/`
* Inside it, create `node_js.yml`:

```yaml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x]

    steps:
    - name: Checkout repo
      uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - run: npm install
    - run: npm run build --if-present
    - run: npm test
```

---

## 🔍 **Explanation of Each Part**

| Term              | What It Does                                                                |
| ----------------- | --------------------------------------------------------------------------- |
| `name`            | Title of the workflow (you’ll see this in GitHub Actions tab).              |
| `on`              | Events that trigger the workflow (push/pull\_request to `main`).            |
| `jobs`            | The group of tasks that will run. In this case, it’s a single job: `build`. |
| `runs-on`         | The OS environment where the job runs (Ubuntu).                             |
| `strategy.matrix` | Run the workflow on multiple Node.js versions (14.x, 16.x).                 |
| `steps`           | List of actions that happen in order.                                       |

### 🧩 Steps (Detailed):

| Step                         | Purpose                                         |
| ---------------------------- | ----------------------------------------------- |
| `actions/checkout@v3`        | Pulls your code from the repo into the runner.  |
| `actions/setup-node@v3`      | Installs Node.js version specified in `matrix`. |
| `npm install`                | Installs all your dependencies.                 |
| `npm run build --if-present` | Builds your app if you have a build script.     |
| `npm test`                   | Runs your tests (as defined in `package.json`). |

---

## ✅ **Testing and Deployment Ideas**

1. **Add Tests**:

   * Write tests using Jest or Mocha.
   * Put test command inside `package.json`:

     ```json
     "scripts": {
       "test": "jest"
     }
     ```

2. **Automate Deployment**:

   * After testing, you can add a step to deploy to:

     * Heroku
     * AWS
     * Render
     * Netlify (if frontend)

---

## 🧪 **Experiment and Learn**

* Change Node.js versions in the `matrix` to test with different versions.
* Modify steps and observe what changes in the Actions tab.
* Try:

  ```yaml
  matrix:
    node-version: [16.x, 18.x, 20.x]
  ```
* Add unit tests, integration tests, linting steps, etc.
