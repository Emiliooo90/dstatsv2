from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2
import pandas as pd
import plotly.graph_objects as go

app = Flask(__name__)
CORS(app)

# Configuración de la conexión a la base de datos
db_config = {
    "dbname":"harvard_v_1_2",
    "user":"postgres",
    "password":"masterdiego",
    "host":"127.0.0.1",
    "port":"5433",
}

def execute_imexPais(pais):
    connection = psycopg2.connect(**db_config)
    try:
        with connection.cursor() as cursor:
            # Ejecutar la query
            query = f'''
            SELECT * FROM "mvImexPais" WHERE location_code='{pais}' 
            '''
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

def execute_impByLoc(pais):
    connection = psycopg2.connect(**db_config)
    try:
        with connection.cursor() as cursor:
            # Ejecutar la query
            query = f'''
            SELECT * FROM "vista_imp_by_loc" WHERE location_code='{pais}'
            '''
            cursor.execute(query)
            results = cursor.fetchall()
            columns = [column[0] for column in cursor.description] 
            return results, columns
    finally:
        connection.close()

def execute_expByLoc(pais):
    connection = psycopg2.connect(**db_config)
    try:
        with connection.cursor() as cursor:
            query = f'''
            SELECT * FROM vista_exp_by_loc WHERE location_code='{pais}'
            '''
            cursor.execute(query)
            results = cursor.fetchall()
            columns = [column[0] for column in cursor.description]
            return results, columns
    finally:
        connection.close()

@app.route('/api/imexPais/<pais>', methods=['GET'])
def buscar_imexPais(pais):
    results, columns = execute_imexPais(pais)
    data = []
    for row in results:
        data.append(dict(zip(columns, row)))
    return jsonify(data)

@app.route('/api/impByLoc/<pais>', methods=['GET'])
def buscar_impByLoc(pais):
    results, columns = execute_impByLoc(pais)
    data = []
    for row in results:
        data.append(dict(zip(columns, row)))
    return jsonify(data)

@app.route("/api/contenido/index/world/<tipo>", methods=['GET'])
def graph_world(tipo):
    df = pd.read_csv('dstatsr/static/csv/world_data_01.csv')
    kwargs_layout = {
        'dragmode':False,
        'margin':dict(t=0, l=0, r=0, b=0),
        'geo':dict(
                #showframe=False,
                framecolor='#585a5a',
                showcoastlines=False,
                projection_type='equirectangular',
                bgcolor='rgba(0,0,0,0)')
    }
    if tipo == 'importaciones':
        fig = go.Figure(data=go.Choropleth(
            locations=df.location_code,
            z=df.importaciones.astype(float),
            colorscale='thermal',
            colorbar_title='USD',
            colorbar_len=0.75,
            marker_line_color='darkgray',
            marker_line_width=0.5
            ))
        fig.update_layout(
            **kwargs_layout
            )
    elif tipo == 'exportaciones':
        fig = go.Figure(data=go.Choropleth(
            locations=df.location_code,
            z=df.exportaciones.astype(float),
            colorscale='thermal',
            colorbar_title='USD',
            colorbar_len=0.75,
            marker_line_color='darkgray',
            marker_line_width=0.5
            ))
        fig.update_layout(
            **kwargs_layout
            )

    return fig.to_json()

@app.route('/api/contenido/perfil/s1_treemap/<pais>/<tipo>')
def plot_treemap(pais, tipo):
    results, columns = execute_imexPais(pais)
    df = pd.DataFrame(results, columns=columns)
    df.parent_id.replace(to_replace=9999, value='Total', inplace=True)

    treemap_trace_kwargs = {
        'labels' : df.hs_product_name_sh_es,
        'text' : df.hs_product_name_lg_es,
        'ids' : df.product_id,
        'parents' : df.parent_id,
        'branchvalues' : 'total',
        'textinfo' : 'label+percent parent',
        'maxdepth' : 3,
        'hoverinfo' : 'text+value'
    }

    treemap_layout_kwargs = {
        'margin' : dict(t=0, l=0, r=0, b=0),
        # 'width' : 650,
        # 'height' : 650,
        'font' : dict(size=15),
        'paper_bgcolor' : 'rgba(0,0,0,0)',
        'modebar' : dict(add=['resetview','resetscale','zoomout'])
    }

    fig = go.Figure()
    fig.add_trace(go.Treemap(
        values=df[f'{tipo}'],
        **treemap_trace_kwargs
        ))
    fig.update_layout(
        **treemap_layout_kwargs
        )
    fig.data[0]['textfont']['color'] = "white"

    return fig.to_json()

@app.route('/api/contenido/perfil/s3_world/<pais>/<ano>')
def plot_destinos(pais,ano):
    results, columns = execute_expByLoc(pais)
    dff = pd.DataFrame(results, columns=columns)
    df = dff.loc[(dff.year==int(ano)) & (dff.partner_code!='ANS')]
    kwargs_layout = {
        'dragmode':False,
        'margin':dict(t=0, l=0, r=0, b=0),
        'geo':dict(
                #showframe=False,
                framecolor='#585a5a',
                showcoastlines=False,
                projection_type='equirectangular',
                bgcolor='rgba(0,0,0,0)')
    }
    fig = go.Figure(data=go.Choropleth(
        locations=df.partner_code,
        z=df.exportaciones.astype(float),
        colorscale='YlOrRd',
        colorbar_title='USD CIF',
        colorbar_len=0.75,
        marker_line_color='darkgray',
        marker_line_width=0.5
        ))
    fig.update_layout(
        **kwargs_layout
    )
    return fig.to_json()

@app.route('/api/contenido/perfil/s4_world/<pais>/<ano>')
def plot_origenes(pais,ano):
    results, columns = execute_impByLoc(pais)
    dff = pd.DataFrame(results, columns=columns)
    df = dff.loc[(dff.year==int(ano)) & (dff.partner_code!='ANS')]

    kwargs_layout = {
        'dragmode':False,
        'margin':dict(t=0, l=0, r=0, b=0),
        'geo':dict(
                #showframe=False,
                framecolor='#585a5a',
                showcoastlines=False,
                projection_type='equirectangular',
                bgcolor='rgba(0,0,0,0)')
    }
    fig = go.Figure(data=go.Choropleth(
        locations=df.partner_code,
        z=df.importaciones.astype(float),
        colorscale='YlGnBu',
        colorbar_title='USD FOB',
        colorbar_len=0.75,
        marker_line_color='darkgray',
        marker_line_width=0.5
        ))
    fig.update_layout(        
        **kwargs_layout
        )

    return fig.to_json()

if __name__ == '__main__':
    app.run(debug=True,host='127.0.0.1', port=5050)
