# eslint-config

## Usage

### Install

```bash
   // pnpm
  pnpm add -D eslint @damilaredev/eslint-config-typescript
  
  //with npm
  npm i -D eslint @damilaredev/eslint-config-typescript
  
  //with yarn
  yarn add -D eslint @damilaredev/eslint-config-typescript
```

### Config `.eslintrc`

```json
{
 "extends": ["@damilaredev/eslint-config-typescript"]
}
```

### Add script for `package.json`

### For example:

```json
{
 "scripts": {
  "lint": "eslint \"**/*.{ts,js}\"",
  "lint:fix": "eslint --fix \"**/*.{ts,js}\""
 }
}
```
