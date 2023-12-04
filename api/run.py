from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

# Configuración de la conexión a la base de datos
db_config = {
    "dbname":"harvard_v1",
    "user":"postgres",
    "password":"masterdiego",
    "host":"127.0.0.1",
    "port":"5432",
}

def execute_imexPais(pais):
    connection = psycopg2.connect(**db_config)
    try:
        with connection.cursor() as cursor:
            # Ejecutar la query
            query = f'''
            SELECT * FROM "mvImexPais" WHERE location_code='{pais}' and parent_id=9999'''
            cursor.execute(query)
            # Obtener los resultados
            results = cursor.fetchall()
            # Obtener los nombres de las columnas
            columns = [column[0] for column in cursor.description]
            # data = []
            # for row in results:
            #     data.append(dict(zip(columns, row)))
            # return jsonify(data)  
            return results, columns
    finally:
        connection.close()

@app.route('/api/imp_by_loc/<pais>', methods=['GET'])
def buscar_imexPais(pais):
    results, columns = execute_imexPais(pais)
    data = []
    for row in results:
        data.append(dict(zip(columns, row)))
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True,host='127.0.0.1', port=5050)
