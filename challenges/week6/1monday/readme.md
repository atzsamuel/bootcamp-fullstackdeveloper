# Expressions Matter

## Kata Link 🥋

[Expressions Matter](https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/sql)

## Helpful Resources 📖

1. [Greatest - Oracle](https://docs.oracle.com/cd/B19306_01/server.102/b14200/functions060.htm)
2. [MAX - Oracel](https://docs.oracle.com/cd/B19306_01/server.102/b14200/functions085.htm)

## My Solution
[My Solution](./ExpressionsMatter.sql)

```sql
SELECT GREATEST(
a*(b+c),
a*b*c,
a+(b*c),
(a+b)*c,
(a+b)+c
) as res
FROM expression_matter;
```

