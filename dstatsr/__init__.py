from flask import Flask, render_template
from . import dstats

def create_app():

    app = Flask(__name__)

    #Config
    app.config.from_mapping(
        DEBUG = True,
        SECRET_KEY = 'secreto'
    )

    app.register_blueprint(dstats.bp)
    
    return app