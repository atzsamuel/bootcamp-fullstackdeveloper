# SQL Basics: Simple NULL Handling

## Kata Link 🥋

[SQL Basics: Simple NULL Handling](https://www.codewars.com/kata/5811315e04adbbdb5000050e/train/sql)

## Helpful Resources 📖

1. [Oracle COALESCE](https://www.oracletutorial.com/oracle-comparison-functions/oracle-coalesce/)
2. [Oracle NULLIF](https://www.techonthenet.com/oracle/functions/nullif.php)

# Solution

```sql
SELECT
id,
COALESCE(NULLIF(name, ''),'[product name not found]') as name,
price,
COALESCE(NULLIF(card_name, ''),'[card name not found]') as card_name,
card_number,
transaction_date
FROM eusales
WHERE price >= 50.00;
```

[Solution](./nullHandling.sql)
