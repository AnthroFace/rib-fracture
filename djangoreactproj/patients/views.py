import csv 

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import generics

from django.shortcuts import render
from django.http import HttpResponse

from .models import *
from .serializers import *

@api_view(['GET', 'POST'])
def patients_list(request):
    if request.method == 'GET':
        data = Patient.objects.all()
        if 'fil' in request.session:
            fil = request.session.get('fil')
            print("HELLO",request.session.get('fil'))

        serializer = PatientSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        print(request.data)
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def patients_detail(request, pk):
    try:
        patient = Patient.objects.get(pk=pk)
    except Patient.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PatientSerializer(patient, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        patient.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def fractures_list(request):
    if request.method == 'GET':
        data = Fracture.objects.all()

        serializer = FractureSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FractureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def patients_filter(request):
    if request.method == 'GET':
        data = Filter.objects.all()

        serializer = FilterSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FilterSerializer(data=request.data)
        if serializer.is_valid():
            # print(serializer.validated_data["fil"])
            request.session['fil'] = serializer.validated_data["fil"]
            # print(request.session['fil'])
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # elif request.method == 'GET':
    #     filter_kwargs = {fil + '__contains': val}
    #     data = Patient.objects.filter(**filter_kwargs)

    #     serializer = PatientSerializer(data, context={'request': request}, many=True)

    #     return Response(serializer.data)

# @api_view(['PUT', 'DELETE'])
# def fractures_detail(request, pk):
#     try:
#         fracture = Fracture.objects.get(pk=pk)
#     except Fracture.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'PUT':
#         serializer = FractureSerializer(fracture, data=request.data,context={'request': request})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_204_NO_CONTENT)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         fracture.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
