
import requests
import random
import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="Web_API_to_DB",
    user="postgres",
    password="meryem"
)

cursor = conn.cursor()

response = requests.get("https://restcountries.com/v3.1/all?fields=name,flags")
all_countries = response.json()

random_countries = random.sample(all_countries, 10)

for country in random_countries:
    name = country.get('name', {}).get('common', 'Unknown')
    capital = country.get('capital', ['Unknown'])[0] if country.get('capital') else 'Unknown'
    flag = country.get('flags', {}).get('png', '')
    subregion = country.get('subregion', 'Unknown')
    population = country.get('population', 0)


    cursor.execute("""
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    """, (name, capital, flag, subregion, population))

conn.commit()

cursor.close()
conn.close()

print("10 pays insérés avec succès !")
