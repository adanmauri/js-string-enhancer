# What is JavaScript String Enhancer
JS String Enhancer is a library that adds new methods to JavaScript's strings.

## union()
### Definition and Usage
The union method returns the union of two sets of strings. The alternation of a and b matches either a or b (union in set theory).

### Syntax
```js
string.union(anotherString)
```

### Parameters values
* **anotherString**: Required. The value that will operate the string

### Example

Return a string where is the union of "Hello wor" and "world!":

```js
var str = "Hello wor";
var res = str.union("world!");
```
The result of *res* will be:
```js
Hello world!
```

## replaceAll()
### Definition and Usage
The replaceAll() method searches a string, or a *regular expression*, for a specified value and returns a new string where the specified values are replaced in any instance.

### Syntax
```js
string.replace(searchvalue, newvalue)
```

### Parameters values
* **searchvalue**: Required. The value, or regular expression, that will be replaced by the new value
* **newvalue**: Required. The value to replace the search value with

#### Example

Return a string where "Hello world!" is replaced with "Hella warld!":
```js
var str = "Hello world!";
var res = str.replaceAll("o", "a");
```
The result of *res* will be:
```js
Hella warld!
```
