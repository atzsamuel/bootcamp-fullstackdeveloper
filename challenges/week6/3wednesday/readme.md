# Even Or Odd

## Kata Link 🥋

[Even Or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/sql)

## Helpful Resources 📖

1. [MOD - Oracle](https://docs.oracle.com/cd/B19306_01/server.102/b14200/functions088.htm)

## Solution
[My Solution](./evenOrOdd.sql)
```sql
SELECT 
CASE WHEN MOD(NUMBER,2) = 0 
    THEN 'Even' 
  ELSE 'Odd' 
END  IS_EVEN 
FROM NUMBERS;
```