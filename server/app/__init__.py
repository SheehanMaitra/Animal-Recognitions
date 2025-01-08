
from flask import Flask
from pymongo import MongoClient

from server.config import Config

app = Flask(__name__)

client = MongoClient(Config.mongo_uri)


from app import routes
from app import config