# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class model_input(BaseModel):
    
    nitrogen : float
    phosphorus: float
    potassium : float
    temperature : float
    humidity : float
    ph :float
    rainfall  : float
    
    
#loading the saved model

crop_model = pickle.load(open('cropmodel2.pkl','rb'))

@app.post('/crop_prediction')
def crop_prediction(input_parameters : model_input):
    mapper = {1: 'rice',
          2: 'maize',
          3: 'chickpea',
          4: 'kidneybeans',
          5: 'pigeonpeas',
          6: 'mothbeans',
          7: 'mungbean',
          8: 'blackgram',
          9: 'lentil',
          10: 'pomegranate',
          11: 'banana',
          12: 'mango',
          13: 'grapes',
          14: 'watermelon',
          15: 'muskmelon',
          16: 'apple',
          17: 'orange',
          18: 'papaya',
          19: 'coconut',
          20: 'cotton',
          21: 'jute',
          22: 'coffee'}
    
    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)
    
    nitrogen = input_dictionary['nitrogen']
    phosphorus = input_dictionary['phosphorus']
    potassium = input_dictionary['potassium']
    temperature = input_dictionary['temperature']
    humidity = input_dictionary['humidity']
    ph = input_dictionary['ph']
    rainfall = input_dictionary['rainfall']
        
    input_list = [nitrogen, phosphorus, potassium, temperature, humidity,ph,rainfall]  

    prediction = crop_model.predict([input_list])
    predicted_class = int(prediction[0])
    value = mapper.get(predicted_class, "Unknown")
    
    return {"predicted_crop": value}