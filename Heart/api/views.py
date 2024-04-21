from rest_framework.decorators import api_view
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from .models import Obesity  # Replace 'Obesity' with the appropriate model name for your Heart Disease project
import numpy as np
import pickle
import os
import joblib

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Obesity  # Replace 'Obesity' with the appropriate model name for your Heart Disease project
import numpy as np
import pickle

@api_view(['POST'])
def predict(request):
    if request.method == 'POST':
        # Load the trained model
        model = pickle.load(open('model.pkl', 'rb'))

        # Deserialize the input data from the request
        serializer = Obesity(data=request.data)  # Replace 'HeartDiseaseInputSerializer' with your serializer class
        if serializer.is_valid():
            # Get the input data from the serializer
            input_data = [serializer.validated_data[field] for field in serializer.fields]

            # Make prediction using the loaded model
            prediction = model.predict(np.array(input_data).reshape(1, -1))

            # Map prediction to meaningful labels
            if prediction == 0:
                result = "Not affected by heart disease"
            else:
                result = "Affected by heart disease"

            # Return the predicted result as a JSON response
            return Response({'prediction': result})
        else:
            # Return a bad request response if input data is invalid
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
