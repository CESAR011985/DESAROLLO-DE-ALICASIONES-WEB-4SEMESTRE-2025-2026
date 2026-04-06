from flask import Flask, render_template, request, redirect

# 🔥 IMPORTANTE: importar el service
from services.cliente_service import *

app = Flask(__name__)

# 🔹 INICIO
@app.route('/')
def index():
    return redirect('/clientes')


# 🔹 LISTAR CLIENTES
@app.route('/clientes')
def clientes():
    data = obtener_clientes()
    return render_template('clientes/listar.html', clientes=data)


# 🔹 CREAR CLIENTE
@app.route('/clientes/crear', methods=['GET', 'POST'])
def crear_cliente():
    if request.method == 'POST':
        insertar_cliente(
            request.form['nombre'],
            request.form['telefono'],
            request.form['direccion']
        )
        return redirect('/clientes')
    return render_template('clientes/crear.html')


# 🔹 EDITAR CLIENTE
@app.route('/clientes/editar/<int:id>', methods=['GET', 'POST'])
def editar_cliente(id):
    cliente = obtener_cliente(id)
    if request.method == 'POST':
        actualizar_cliente(
            id,
            request.form['nombre'],
            request.form['telefono'],
            request.form['direccion']
        )
        return redirect('/clientes')
    return render_template('clientes/editar.html', cliente=cliente)


# 🔹 ELIMINAR CLIENTE
@app.route('/clientes/eliminar/<int:id>')
def eliminar_cliente_route(id):
    eliminar_cliente(id)
    return redirect('/clientes')


# 🔹 EJECUTAR APP
if __name__ == '__main__':
    app.run(debug=True)