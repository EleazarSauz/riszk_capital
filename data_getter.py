import csv
from bs4 import BeautifulSoup
from scrapeador import page_get

def atriubutos_get(url,archivo_csv,id):
    atributos_porcentajes = []
    raw_html = page_get(url)
    html = BeautifulSoup(raw_html, 'html.parser')

    for span in html.select('span'):

        if span['class'] == ['label', 'rating', 'r1'] or span['class'] == ['label', 'rating', 'r2'] or span['class'] == ['label', 'rating', 'r3'] or span['class'] == ['label', 'rating', 'r4'] or span['class'] == ['label', 'rating', 'r5']:
            atributos_porcentajes.append(str(span.text))
    atributos_porcentajes.remove(atributos_porcentajes[0])
    atributos_porcentajes.remove(atributos_porcentajes[0])
    atributos_porcentajes.insert(0,id)
    atributos_porcentajes.append('\n')
    with open(archivo_csv, 'a') as csvFile:
        writer = csv.writer(csvFile)
        writer.writerow(atributos_porcentajes)

    csvFile.close()
