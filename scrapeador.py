from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup

def page_get(url):
    try:
        with closing(get(url, stream = True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None

    except RequestExcetion as e:
        log_error('Error en {0} : {1}'.format(url, str(e)))
        return None

def is_good_response(resp):
    """
    Esta funcion nos permite saber si lo que  se esta reciiendo
    es un documento HTML
    """
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200
            and content_type is not None
            and content_type.find('html') > -1)


def log_error(e):
    "Esta duncion nos permite conocer los errores"
    print(e)


