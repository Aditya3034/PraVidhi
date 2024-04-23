
import sys
import joblib
import json
import os


import pandas as pd
import pickle


import numpy as np
def predict(input_data):

    # print(input_data)
    script_dir = os.path.dirname(__file__)

    model_path = os.path.join(script_dir, 'multi_target_forest.joblib')
    multi_target_forest = joblib.load(model_path)
    # multi_target_forest = joblib.load('multi_target_forest.joblib')
    form_data = input_data
    # print('Predict')

        
        # Initialize variables to store data
    data = {}

        # Extract data from form and store it in a dictionary
    for key in ['ph', 'temperature', 'rainfall', 'N', 'K', 'P']:
        # Check if the value is not an empty string
        value = form_data.get(key)
        if value and value.strip():  # Check if value is not empty or whitespace only
            data[key] = float(value)  # Convert to float
        
    # Convert data to array for prediction
    # arr = np.array([[data.get('ph', 0), data.get('temperature', 0), data.get('rainfall', 0), data.get('N-content', 0), data.get('K-content', 0), data.get('PH-content', 0)]])
    x = len(multi_target_forest)
    # print(x)
    
    # # Use the model to make a prediction
    # print(multi_target_forest, "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    # print(type(multi_target_forest))
    # prediction = multi_target_forest.predict(arr)
    #    print(prediction)
    # Map prediction to crop
    crops = []
    my_array = [['rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas',
    'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate',
    'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple',
    'orange', 'papaya', 'cotton', 'coconut', 'jute', 'coffee']]
    for i in range(len(multi_target_forest[0])):
        if multi_target_forest[0][i] == 1:
            crop = my_array[0][i]
            # print(crop)
            crops.append(crop)
            # print("CROPS", crops)
    return crops

import json

if __name__ == "__main__":
    input_data = json.loads(sys.stdin.read())
    prediction = predict(input_data)
    print(json.dumps(prediction)) 
