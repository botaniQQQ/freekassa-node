# Generate URL for payment in Freekassa/Free-kassa.

## Installation

```
npm i freekassa-node
```

## Usage

```javascript
const freekassa = require('freekassa-node');

console.log(freekassa({
    "oa": "99",
    "o": "ID_234",
    "m": "14963",
}, 'secret_word_1'));
/* =>
{
    "signature": "dfc2448091e2cc4191fc283435593e21",
    "url": "http://www.free-kassa.ru/merchant/cash.php?
        oa=99&
        o=ID_234&
        m=14963&
        s=dfc2448091e2cc4191fc283435593e21"
}
 */

console.log(freekassa({
    "AMOUNT": "99",
    "MERCHANT_ORDER_ID": "ID_234",
    "MERCHANT_ID": "14963",
}, 'secret_word_2'));
/* =>
{
    "signature": "c0905625cf96d7730487a4dda69c6a09"
}
 */
```

## API

### freekassa(params, word)

#### params

Type: `object`

URL parameters.

#### word

Type: `string`

Freekassa secret word 1|2.

## Test

```
npm test
```