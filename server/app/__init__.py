from flask import Flask
from pymongo import MongoClient
from flask_cors import CORS

mongo_uri = "mongodb+srv://maitrasheehan:mThA5aUzKePZnOYK@pets.6l0mc.mongodb.net/?retryWrites=true&w=majority&appName=Pets"

app = Flask(__name__)
client = MongoClient(mongo_uri)
