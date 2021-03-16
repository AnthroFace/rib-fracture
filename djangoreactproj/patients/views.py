import json
import ast

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import generics

from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse

from .models import *
from .serializers import *

# import logging
# logger = logging.getLogger(__name__)

@api_view(['GET', 'POST'])
def patients_list(request):
    if request.method == 'GET':
        data = Patient.objects.all()
        # print("HELLO",request.session['fil'])
        # print(request.session.items())
        # if 'fil' in request.session:
        #     fil = request.session.get('fil')
        #     print("HELLO",request.session.get('fil'))

        serializer = PatientSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        #print(request.data)
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
def patients_filter(request):
    if request.method == 'GET':
        data = Filter.objects.all()
        fil_string = "{"

        serializer = FilterSerializer(data, context={'request': request}, many=True)
        try:
            for key in serializer.data[0].keys():
                if key != "pk" and serializer.data[0][key] != "" and serializer.data[0][key] is not None:
                    fil_string = fil_string + '\'' + key + '\': ' + '"' + serializer.data[0][key] + '",' 
            fil_string = fil_string[:-1]
            fil_string = fil_string + "}"
            # print("string", fil_string)
            # print ("string", type(fil_string))
            # fil_dict = json.loads(fil_string) - its still a string after 
            fil_dict = ast.literal_eval(fil_string) 
           
            print("DICTIONARY",fil_dict)
            print ("type of final_dictionary", type(fil_dict))

            patient_data = Patient.objects.filter(**fil_dict)
            patient_serializer = PatientSerializer(patient_data, context={'request': request}, many=True)
            return Response({
                'patients': patient_serializer.data,
                'filters': serializer.data
            })
        except:
            return Response([])
            #return redirect(patients_list)


    elif request.method == 'POST':
        serializer = FilterSerializer(data=request.data)
        if serializer.is_valid():
            # print("ancestry", serializer.validated_data["ancestry"])
            # request.session['ancestry'] = serializer.validated_data["ancestry"]
            # print(request.session['ancestry'])
            # print("POSTED")
            # print(request.session.get_expire_at_browser_close())
            # request.session.modified = True
            # print("PATIENTS_FILTER", request.session['fil'])
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # elif request.method == 'GET':
    #     filter_kwargs = {fil + '__contains': val}
    #     data = Patient.objects.filter(**filter_kwargs)

    #     serializer = PatientSerializer(data, context={'request': request}, many=True)

    #     return Response(serializer.data)

@api_view(['PUT','DELETE'])
def filter_delete(request, pk):
    try:
        fil = Filter.objects.get(pk=pk)
    except Filter.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = FilterSerializer(fil, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        fil.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# @api_view(['GET'])
# def filtered_patients_list(request):
#     if request.method == 'GET':
#         patients = Patient.objects.all()
#         filters = Filter.objects.all()

#         patient_serializer = PatientSerializer(patients, context={'request': request}, many=True)
#         filter_serializer = FilterSerializer(filters, context={'request': request}, many=True)
        
#         print("FILTERS",filter_serializer.data[0]['ancestry'])
#         # print("TYPE", type(filter_serializer.data))
#         # print(filter_serializer.data[0])
#         # print("REQUEST",filters)
#         # print(json.loads(filter_serializer.data.decode('utf-8')))

#         # filter_serializer = FilterSerializer(data=request.data)
#         # if filter_serializer.is_valid():
#         #     print("VALIDATED", filter_serializer.validated_data)
#         #     # data = json.loads(request.body.decode('utf-8'))
#             # print(patient_data)
        
#         # kwargs = {
#         #     'ancestry': patient_serializer.data
#         # }
#         # elif request.method == 'POST':
#         # serializer = FilterSerializer(data=request.data)
#         # if serializer.is_valid():
#         #     # print(serializer.validated_data["fil"])
#         #     # request.session['fil'] = serializer.validated_data["fil"]
#         #     # print(request.session.get_expire_at_browser_close())
#         #     # request.session.modified = True
#         #     # print("PATIENTS_FILTER", request.session['fil'])
#         #     serializer.save()
#         #     return Response(status=status.HTTP_201_CREATED)

#         # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#         return Response({
#             'patients':patient_serializer.data,
#             'filters': filter_serializer.data
#         })
