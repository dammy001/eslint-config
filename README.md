# eslint-config

## Usage

### Install

```bash
   // pnpm
  pnpm add -D eslint @damilaredev/eslint-config
  
  //with npm
  npm i -D eslint @damilaredev/eslint-config
  
  //with yarn
  yarn add -D eslint @damilaredev/eslint-config
```

### Config `.eslintrc`

```json
{
 "extends": ["@damilaredev/eslint-confg"]
}
```

### Add script for `package.json`

### For example:

```json
{
 "scripts": {
  "lint": "eslint \"**/*.{vue,ts,js}\"",
  "lint:fix": "eslint --fix \"**/*.{vue,ts,js}\""
 }
}
```
