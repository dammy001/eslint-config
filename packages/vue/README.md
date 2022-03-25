# eslint-config

## Usage

### Install

```bash
   // pnpm
  pnpm add -D eslint @damilaredev/eslint-config-vue
  
  //with npm
  npm i -D eslint @damilaredev/eslint-config-vue
  
  //with yarn
  yarn add -D eslint @damilaredev/eslint-config-vue
```

### Config `.eslintrc`

```json
{
 "extends": ["@damilaredev/eslint-config-vue"]
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
