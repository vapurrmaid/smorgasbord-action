# Smorgasbord Action

This action provides an interface to the npm package [`@vapurrmaid/smorgasbord`][1],
a tool that scans web endpoints for potential vulnerabilities.

## Inputs

### fqdn

Your fully-qualified domain name.

- **required**
- string

```yml
uses: actions/smorgasbord-probe@v1
with:
  fqdn: 'https://vapurrmaid.ca'
```

[1]: https://www.npmjs.com/package/@vapurrmaid/smorgasbord
