# eslint-config

## Usage

### Install

```bash
    pnpm add -D eslint @damilaredev/eslint-config
```

### Config `.eslintrc`

```json
{
 "extends": ["@damilaredev"]
}
```

### Add script for `package.json`

### For example:

```json
{
 "scripts": {
  "lint": "eslint \"**/*.{vue,ts,js}\""
 }
}
```
