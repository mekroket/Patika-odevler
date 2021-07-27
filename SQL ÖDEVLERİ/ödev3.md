# Patika NodeJs Backend Patikasi  SQL Ödevleri

## Proje 3 Amacı
1-Country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.

2-Country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.

3-Film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.

4-Film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.
</br>


# Kodlar ;
```sql
1- select * from country
where country like 'A%a'

2- select * from country
where length(country) > 6 and country like '%n'

3-select title from film
where  title ilike '%t%t%t%t'

4-select * from film
where  length>90 and title like 'C%' and rental_rate = 2.99
```