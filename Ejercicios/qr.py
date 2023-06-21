#pip install qrcode
import qrcode

def qr(url):
    f = open("qr.png", "wb")
    qrcode.make(url).save(f)
    f.close()

qr("www.google.es")
