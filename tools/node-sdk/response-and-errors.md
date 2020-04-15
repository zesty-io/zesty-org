### Response Object Format

Responses from the API will generally be delivered as objects having the following form:

```javascript
{
  _meta: {
    timestamp: '2019-02-14T18:42:19.279094718Z',
    totalResults: 1,
    start: 0,
    offset: 0,
    limit: 1
  },
  data: // Object or array of objects.
}
```

The content of `data` will be either an object (for endpoints that return one item) or an array containing zero or more objects (endpoints that can return multiple items will return an array regardless of how many items match the query).

### Error Response Format

Responses for error cases will generally be delivered as objects having the following form:

```javascript
{
  reason: 'Textual description',
  statusCode: 401, // HTTP response code from API, 400, 401, 500 etc
  error: 'Something is wrong' // null or string or object with error detail
}
```