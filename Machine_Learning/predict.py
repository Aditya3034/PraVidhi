
# import sys
# import joblib
# import json
# import os


# import pandas as pd
# import pickle


# import numpy as np
# def predict(input_data):

#     # print(input_data)
#     script_dir = os.path.dirname(__file__)

#     model_path = os.path.join(script_dir, 'multi_target_forest.joblib')
#     multi_target_forest = joblib.load(model_path)
#     # multi_target_forest = joblib.load('multi_target_forest.joblib')
#     form_data = input_data
#     # print('Predict')

        
#         # Initialize variables to store data
#     data = {}

#         # Extract data from form and store it in a dictionary
#     for key in ['ph', 'temperature', 'rainfall', 'N', 'K', 'P']:
#         # Check if the value is not an empty string
#         value = form_data.get(key)
#         if value and value.strip():  # Check if value is not empty or whitespace only
#             data[key] = float(value)  # Convert to float
        
#     # Convert data to array for prediction
#     # arr = np.array([[data.get('ph', 0), data.get('temperature', 0), data.get('rainfall', 0), data.get('N-content', 0), data.get('K-content', 0), data.get('PH-content', 0)]])
#     x = len(multi_target_forest)
#     # print(x)
    
#     # # Use the model to make a prediction
#     # print(multi_target_forest, "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
#     # print(type(multi_target_forest))
#     # prediction = multi_target_forest.predict(arr)
#     #    print(prediction)
#     # Map prediction to crop
#     crops = []
#     my_array = [['rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas',
#     'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate',
#     'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple',
#     'orange', 'papaya', 'cotton', 'coconut', 'jute', 'coffee']]
#     for i in range(len(multi_target_forest[0])):
#         if multi_target_forest[0][i] == 1:
#             crop = my_array[0][i]
#             # print(crop)
#             crops.append(crop)
#             # print("CROPS", crops)
#     return crops

# import json

# if __name__ == "__main__":
#     input_data = json.loads(sys.stdin.read())
#     prediction = predict(input_data)
#     print(json.dumps(prediction)) 


import os
# import sys
# import json
# import pickle
# import numpy as np
# import pandas as pd

# def load_model():
#     # Assuming the script and model are in the same directory
#     script_dir = os.path.dirname(__file__)
#     model_path = os.path.join(script_dir, 'RandomForest.pkl')
#     with open(model_path, 'rb') as file:
#         model = pickle.load(file)
#     return model

# # Prediction function
# def predict(input_data):
#     model = load_model()
#     input_df = pd.DataFrame([input_data], columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])
#     predictions = model.predict(input_df)
#     crop_names = ['rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas', 'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate', 'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple', 'orange', 'papaya', 'cotton', 'coconut', 'jute', 'coffee']
#     predicted_crops_df = pd.DataFrame(predictions, columns=crop_names)
#     predicted_crops = predicted_crops_df.idxmax(axis=1).tolist()
#     return predicted_crops

# # Example usage
# if __name__ == '__main__':
#     # Example input data
#     input_data = [40, 28, 50, 20.60, 100.40, 3.78, 200.94]
#     result = predict(input_data)
#     print("Predicted Crop:", result)


#  input_data = [104, 18, 30, 23.60, 60.40, 6.78, 140.94]




import sys
import json
import pickle
import numpy as np
import pandas as pd

def load_model():
    # Assuming the script and model are in the same directory
    script_dir = os.path.dirname(__file__)  # Gets the directory where the script is located
    model_path = os.path.join(script_dir, 'RandomForest.pkl')  # Path to the model file
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
    return model

# Prediction function
def predict(input_values):
    model = load_model()
    # Convert input values to a DataFrame
    input_df = pd.DataFrame([input_values], columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])
    predictions = model.predict(input_df)
    crop_names = ['rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas', 'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate', 'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple', 'orange', 'papaya', 'cotton', 'coconut', 'jute', 'coffee']
    predicted_crops_df = pd.DataFrame(predictions, columns=crop_names)
    predicted_crops = predicted_crops_df.idxmax(axis=1).tolist()
    return predicted_crops

if __name__ == '__main__':
    # Read the input data from stdin
    input_json = sys.stdin.read()
    input_data = json.loads(input_json)
    
    # Convert the input JSON data to a list of values expected by the model
    result = predict(input_data)
    
    # Output the prediction as JSON
    print(json.dumps(result))

