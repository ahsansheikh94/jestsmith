# 🧪 JestSmith

> 🧠💥 Auto-generate Jest test cases for your JavaScript/TypeScript code using AI — so you can ship confidently without writing a single test.

![npm](https://img.shields.io/npm/v/jestsmith)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/ahsansheikh94/jestsmith/release.yml?branch=main)
![License](https://img.shields.io/github/license/ahsansheikh94/jestsmith)

---

## 🚀 What is JestSmith?

**JestSmith** is a CLI tool that uses AI to automatically generate Jest test cases for any JavaScript or TypeScript project, including:

- ✅ React components
- ✅ Node.js backend logic
- ✅ NestJS modules (controllers, services, routes)
- ✅ Any framework or custom business logic

---

## ✨ Features

- ⚡ One-command test generation
- 📂 Folder support (generate tests for entire modules)
- 🧠 AI-powered (works better with a short explanation)
- 📝 Outputs clean, readable, idiomatic Jest tests
- 🧰 Framework-agnostic (React, Node, Angular, NestJS, etc.)
- 🛠️ TypeScript-native

---

## 📦 Installation

```bash
npm install -g jestsmith
```

---

## 🧑‍💻 Usage

### 1. Generate test for a single file

```bash
jestsmith ./src/components/LoginForm.tsx --describe "A login form with Formik + Yup that hits a login API on submit"
```

### 2. Generate test for a whole folder (e.g., a NestJS module)

```bash
jestsmith ./src/modules/user --describe "This is a NestJS User module with CRUD operations"
```

> ✅ The tool will:
>
> - Parse each file
> - Understand file relationships (controllers, services, routes)
> - Generate relevant Jest test cases into a `__tests__/` folder (coming soon: customizable location)

---

## 🛠 CLI Options

| Option       | Description                                               |
| ------------ | --------------------------------------------------------- |
| `--describe` | (optional) Add context so the AI writes better tests      |
| `--outDir`   | (coming soon) Customize the output folder for test files  |
| `--dry-run`  | (coming soon) Preview the generated output without saving |

---

## 📁 Example

Given a file like:

```tsx
// LoginForm.tsx
const LoginForm = () => {
  const formik = useFormik({
    /* yup validation */
  });

  const handleSubmit = async () => {
    await api.login(formik.values);
  };

  return <form onSubmit={handleSubmit}>...</form>;
};
```

Running:

```bash
jestsmith LoginForm.tsx --describe "React login form using Formik and Yup"
```

Might generate:

```tsx
// __tests__/LoginForm.test.tsx
import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  it('calls login API on successful form submission', async () => {
    ...
  });
});
```

---

## 📚 How It Works

Under the hood, JestSmith:

1. Uses AST parsing to understand your code structure
2. Sends intelligently prepared prompts to an LLM (like GPT)
3. Applies Jest syntax best practices
4. Writes test files based on your code and explanation

---

## 💡 Tips for Best Results

- ✅ Provide a short `--describe` for context
- ✅ Keep functions/components modular and clean
- ✅ Use TypeScript where possible for better inference
- ✅ Use meaningful function/component names

---

## 🤖 Roadmap

- [ ] `--dry-run` to preview generated code
- [ ] `--outDir` to customize test file output
- [ ] Support `.jestsmithrc` config files
- [ ] Built-in Prettier formatting
- [ ] Estimate test coverage based on function count
- [ ] VSCode extension support

---

## 🧑‍🎤 Contributing

PRs, ideas, and contributions are welcome!

### 🔧 Local Dev

```bash
# clone the repo
git clone https://github.com/ahsansheikh94/jestsmith.git
cd jestsmith

# install deps
npm install

# build the CLI
npm run build

# test locally
node dist/bin/index.js ./src/example.ts --describe "Login form with API call"
```

---

## 📦 Publishing

This repo uses [Changesets](https://github.com/changesets/changesets) for automated versioning + changelogs + npm publishing.

To release:

```bash
npx changeset       # describe the change
git commit -am "chore: version bump"
git push
```

GitHub Actions will:

- Create a release PR
- Tag version
- Publish to npm automatically

> You’ll need to set `NPM_TOKEN` in GitHub Secrets.

---

## 🪪 License

MIT © [Ahsan Sheikh](https://github.com/ahsansheikh94)

---

## 🌍 Community

Found a bug? Have feature ideas?  
→ [Open an issue](https://github.com/ahsansheikh94/jestsmith/issues)

Love the tool?  
→ ⭐ Star it and share it with your team!

```

```
