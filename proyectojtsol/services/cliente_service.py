from conexion.conexion import get_connection

def obtener_clientes():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM clientes")
    data = cursor.fetchall()
    conn.close()
    return data