# After Life dApp

A coursework-ready distributed application starter built with a TypeScript Express backend, a simple frontend, and a Solidity smart contract scaffold.

## Why this version fits the coursework better

This version is structured to align with the software management brief by including:

- TypeScript configuration
- service-layer backend structure (`routes`, `controllers`, `services`, `types`, `middleware`)
- npm scripts for build and development
- request validation using `express-validator`
- improved API endpoint documentation after branch workflow
- ESLint setup for static code analysis
- Prettier setup for code formatting
- Git workflow guidance for commit, branch, merge, and sync

## Project structure

```text
afterlife-dapp/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   └── server.ts
│   ├── .prettierrc
│   ├── eslint.config.js
│   ├── package.json
│   └── tsconfig.json
├── contracts/
│   └── AfterLife.sol
├── frontend/
│   ├── app.js
│   ├── index.html
│   └── style.css
└── README.md
```

## Installation

### 1. Install backend dependencies

```bash
cd backend
npm install
```

### 2. Development workflow

Open two terminals in `backend/`.

Terminal 1:
```bash
npm run build:watch
```

Terminal 2:
```bash
npm run dev
```

This follows the coursework-style flow where TypeScript compiles into `dist/` and the server runs from compiled JavaScript.

## Available scripts

```bash
npm run build
npm run build:watch
npm run dev
npm run dev:start
npm run start
npm run lint
npm run format
```

## API endpoints

### Create a legacy message

`POST /api/afterlife`

Example JSON body:

```json
{
  "owner": "Alex",
  "beneficiary": "Jamie",
  "message": "This is my future message.",
  "unlockDate": "2026-12-31"
}
```

### Get all messages

`GET /api/afterlife`

### Get one message by ID

`GET /api/afterlife/:id`

## Frontend

Open `frontend/index.html` in a browser once the backend is running on port 3000.

## Suggested Git workflow for evidence in submission

Run these commands and include screenshots of the history or Git graph:

```bash
git init
git add .
git commit -m "feat: initialise afterlife dapp structure"

git checkout -b validation-improvements
# make a small change
# git add .
# git commit -m "feat: add request validation"

git checkout main
git merge validation-improvements
```

You can then push to GitHub:

```bash
git remote add origin <your-repository-url>
git push -u origin main
```

## Possible future improvements

- MetaMask integration
- encrypted messages
- NFT inheritance records
- persistent database storage
- React frontend
