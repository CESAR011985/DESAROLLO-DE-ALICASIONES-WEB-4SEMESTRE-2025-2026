from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template('index.html')

@app.route('/about')
def acerca_de():
    return render_template('about.html')

@app.route('/productos')
def productos():
    return render_template('productos.html')

@app.route('/clientes')
def clientes():
    return render_template('clientes.html')

@app.route('/facturas')
def facturas():
    return render_template('facturas.html')

if __name__ == '__main__':
    app.run(debug=True)