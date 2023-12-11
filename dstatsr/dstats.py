from flask import Blueprint, render_template
import requests
import pandas as pd
import json

from dstatsr.modules.data_mod import data_ImpByLoc

bp = Blueprint('dstats', __name__, url_prefix="/dstats")

@bp.route("/home")
def index():
    paises_data = pd.read_csv(
        "dstatsr\static\csv\paises.csv",
        sep=";",
        encoding="utf8"
    )

    df_pais_cont = paises_data[['parent_id','location_name_short_es','location_code']]

    result = {}

    for index, row in df_pais_cont.iterrows():
        continent = row['parent_id']
        country_name = row['location_name_short_es']
        iso_code = row['location_code']
        
        if continent not in result:
            result[continent] = []
        
        result[continent].append({
            'pais_name': country_name,
            'iso_code': iso_code
        })

    json_pais_cont = json.dumps(result, indent=4)

    product_rkg_data = pd.read_csv(
        'dstatsr\static\csv\product_rkg_data.csv',
        sep=",",
        encoding="utf8"
    )

    json_rkg_data = product_rkg_data.to_json(orient="records")

    listado_markets = ['01','02','03']
    return render_template("index.html",
                            rkg_data=json_rkg_data,
                            listado_pais_cont=json_pais_cont,
                            listado_markets=listado_markets)

@bp.route("/perfil/<cod_pais>")
def perfil(cod_pais):
    response = requests.get(f'http://127.0.0.1:5050/api/imp_by_loc/{cod_pais}')
    return render_template("perfil.html",
                           cod_pais = cod_pais,
                           data = response.json())

@bp.route("/markets/<mkt>")
def markets(mkt):
    return render_template("markets.html", mkt=mkt)