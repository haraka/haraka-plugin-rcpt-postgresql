[![Build Status][ci-img]][ci-url]
[![Code Climate][clim-img]][clim-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/haraka/haraka-plugin-rcpt-postgresql.svg)](https://greenkeeper.io/)
[![NPM][npm-img]][npm-url]

# haraka-plugin-rcpt-postgresql

Validates the rcpt_to addresses (recipient addresses) by connecting to a PostgreSQL database.

## Install

    cd /my/haraka/config/dir
    npm install haraka-plugin-rcpt-postgresql

### Enable

Add the following line to the `config/plugins` file.

`rcpt-postgresql`

## Config

The `rcpt-postgresql.json` file has the following structure (defaults shown). Also note that this file will need to be created, if not present, in the `config` directory.

```javascript
{
  "user": "thihara",
  "database": "haraka",
  "password": "",
  "host": "127.0.0.1",
  "port": 5432,
  "max": 20,
  "idleTimeoutMillis": 30000,
  "sqlQuery": "SELECT EXISTS(SELECT 1 FROM valid_emails WHERE email_id=$1) AS \"exists\""
}
```


[ci-img]: https://travis-ci.org/haraka/haraka-plugin-rcpt-postgresql.svg
[ci-url]: https://travis-ci.org/haraka/haraka-plugin-rcpt-postgresql
[clim-img]: https://codeclimate.com/github/haraka/haraka-plugin-rcpt-postgresql/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-plugin-rcpt-postgresql
[npm-img]: https://nodei.co/npm/haraka-plugin-rcpt-postgresql.png
[npm-url]: https://www.npmjs.com/package/haraka-plugin-rcpt-postgresql
