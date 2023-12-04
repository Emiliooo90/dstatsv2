import psycopg2
from flask import jsonify

db_config = {
    "dbname":"harvard_v1",
    "user":"postgres",
    "password":"masterdiego",
    "host":"127.0.0.1",
    "port":"5432",
}

def data_ImpByLoc(pais):
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
            data = []
            for row in results:
                data.append(dict(zip(columns, row)))
            return jsonify(data)       
    finally:
        connection.close()
