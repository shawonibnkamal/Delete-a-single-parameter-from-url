# Delete-a-single-paramter-from-url

This javascript functions allows to delete a single paramter given the key and value. I wrote this function because the <a href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams">URLSearchParams</a> interface deletes all the parameters instead of just 1.


```js
// Given url is
// https://example.com?foo=1&bar=2&foo=3

deleteParam("foo", 1)

//Output:
// https://example.com?bar=2&foo=3
```
