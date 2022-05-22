# Returning Strings

## Kata Link 🥋

[Returning Strings](https://www.codewars.com/kata/55a70521798b14d4750000a4/train/sql)

## Helpful Resources 📖

1. [concat - Oracle](https://www.oracletutorial.com/oracle-string-functions/oracle-concat/)

## My Solution
[Solution](./returningStrings.sql)
```sql
--person table has name data
SELECT 
 CONCAT('Hello, ',name ,' how are you doing today?')
  as greeting
FROM person;
```