from flask import Blueprint, render_template

bp = Blueprint('dstats', __name__, url_prefix="/dstats")

@bp.route("/home")
def index():
    return render_template("index.html")

@bp.route("/perfil")
def perfil():
    return render_template("perfil.html")

@bp.route("/markets")
def markets():
    return render_template("markets.html")