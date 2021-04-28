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

@api_view(['GET', 'POST', 'DELETE'])
def datasets_list(request):
    if request.method == 'GET':
        current_user = request.user
        data = Dataset.objects.filter(user = current_user)
        serializer = DatasetSerializer(data, context={'request': request}, many=True)

        return Response({'datasets': serializer.data})

    elif request.method == 'POST':
        serializer = DatasetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response()#staus=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #elif request.method == 'DELETE':
    #    set_key = request.data
    #    #set_key = set_data.var1
    #    dataset = Dataset.objects.get(set_key.pk)
    #    dataset.delete()
    #    patients = Patient.objects.get(dataset=pk)
    #    patients.delete()
    #    fils = Filter.objects.get(dataset=pk)
    #    fils.delete()
    #    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT', 'DELETE'])
def datasets_detail(request, pk):
    try:
        dataset = Dataset.objects.get(pk=pk)
    except Dataset.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = DatasetSerializer(dataset, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()#user = request.user)
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        dataset.delete()
        patients = Patient.objects.filter(dataset=pk)
        patients.delete()
        fils = Filter.objects.filter(dataset=pk)
        fils.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def patients_list(request):
    if request.method == 'GET':
        myDataset = request.query_params['dataset']
        data = Patient.objects.filter(dataset = myDataset)
        #data = Patient.objects.all()
        serializer = PatientSerializer(data, context={'request': request}, many=True)

        rib_counts = {"sternum": 0,"lprib1": 0,"lplrib1": 0,"lalrib1": 0,"lprib2": 0,"lplrib2": 0,"lalrib2": 0,"larib2": 0,"lprib3": 0,"lplrib3": 0,"lalrib3": 0,"larib3": 0,"lprib4": 0,"lplrib4": 0,"lalrib4": 0,"larib4": 0,"lprib5": 0,"lplrib5": 0,"lalrib5": 0,"larib5": 0,"lprib6": 0,"lplrib6": 0,"lalrib6": 0,"larib6": 0,"lprib7": 0,"lplrib7": 0,"lalrib7": 0,"larib7": 0,"lprib8": 0,"lplrib8": 0,"lalrib8": 0,"larib8": 0,"lprib9": 0,"lplrib9": 0,"lalrib9": 0,"larib9": 0,"lprib10": 0,"lplrib10": 0,"lalrib10": 0,"larib10": 0,"lprib11": 0,"lplrib11": 0,"lalrib11": 0,"lprib12": 0,"lplrib12": 0,"lalrib12": 0,"rprib1": 0,"rplrib1": 0,"ralrib1": 0,"rprib2": 0,"rplrib2": 0,"ralrib2": 0,"rarib2": 0,"rprib3": 0,"rplrib3": 0,"ralrib3": 0,"rarib3": 0,"rprib4": 0,"rplrib4": 0,"ralrib4": 0,"rarib4": 0,"rprib5": 0,"rplrib5": 0,"ralrib5": 0,"rarib5": 0,"rprib6": 0,"rplrib6": 0,"ralrib6": 0,"rarib6": 0,"rprib7": 0,"rplrib7": 0,"ralrib7": 0,"rarib7": 0,"rprib8": 0,"rplrib8": 0,"ralrib8": 0,"rarib8": 0,"rprib9": 0,"rplrib9": 0,"ralrib9": 0,"rarib9": 0,"rprib10": 0,"rplrib10": 0,"ralrib10": 0,"rarib10": 0,"rprib11": 0,"rplrib11": 0,"ralrib11": 0,"rprib12": 0,"rplrib12": 0,"ralrib12": 0}
        # print(rib_counts)

        if len(serializer.data) > 0:
            for patient in serializer.data:
                for key in patient.keys():
                    if key in rib_counts.keys() and patient[key] == 1:
                        rib_counts[key] += 1
        rib_counts = json.dumps(rib_counts)
    
        return Response({
            'patients':serializer.data,
            'rib_counts': rib_counts,
            'test': myDataset
        })

        # return Response(serializer.data)

    elif request.method == 'POST':
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
        console.error(error.response.data);
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        patient.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def patients_filter(request):
    if request.method == 'GET':
        myDataset = request.query_params['dataset']
        data = Filter.objects.filter(dataset=myDataset)
        print(data)
        age_start = 0
        age_end = 10000
        weight_start = 0
        weight_end = 10000
        height_start = 0
        height_end = 10000
        fil_string = "{"

        serializer = FilterSerializer(data, context={'request': request}, many=True)
        try:
            # filtering patients
            for key in serializer.data[0].keys():
                if key == "age_start" and serializer.data[0][key] != "" and serializer.data[0][key] is not None:
                        age_start = serializer.data[0][key]
                elif key == "weight_start" and serializer.data[0][key] != "" and serializer.data[0][key] is not None:
                        weight_start = serializer.data[0][key]
                elif key == "height_start" and serializer.data[0][key] != "" and serializer.data[0][key] is not None:
                        height_start = serializer.data[0][key]
                elif key == "age_end" and serializer.data[0][key] != "" and serializer.data[0][key] is not None:
                        age_end = serializer.data[0][key]
                elif key == "weight_end" and serializer.data[0][key] != "" and serializer.data[0][key] is not None:
                        weight_end = serializer.data[0][key]
                elif key == "height_end" and serializer.data[0][key] != "" and serializer.data[0][key] is not None:
                        height_end = serializer.data[0][key]
                elif key != "pk" and serializer.data[0][key] != "" and serializer.data[0][key] is not None:
                    fil_string = fil_string + '\'' + key + '\': ' + '"' + str(serializer.data[0][key]) + '",'
            fil_string = fil_string[:-1]
            fil_string = fil_string + "}"
            fil_dict = ast.literal_eval(fil_string) 

            patient_data = Patient.objects.filter(**fil_dict, age__range =(age_start, age_end), weight__range=(weight_start, weight_end), height__range=(height_start, height_end))

            patient_serializer = PatientSerializer(patient_data, context={'request': request}, many=True)
            rib_counts = {"sternum": 0,"lprib1": 0,"lplrib1": 0,"lalrib1": 0,"lprib2": 0,"lplrib2": 0,"lalrib2": 0,"larib2": 0,"lprib3": 0,"lplrib3": 0,"lalrib3": 0,"larib3": 0,"lprib4": 0,"lplrib4": 0,"lalrib4": 0,"larib4": 0,"lprib5": 0,"lplrib5": 0,"lalrib5": 0,"larib5": 0,"lprib6": 0,"lplrib6": 0,"lalrib6": 0,"larib6": 0,"lprib7": 0,"lplrib7": 0,"lalrib7": 0,"larib7": 0,"lprib8": 0,"lplrib8": 0,"lalrib8": 0,"larib8": 0,"lprib9": 0,"lplrib9": 0,"lalrib9": 0,"larib9": 0,"lprib10": 0,"lplrib10": 0,"lalrib10": 0,"larib10": 0,"lprib11": 0,"lplrib11": 0,"lalrib11": 0,"lprib12": 0,"lplrib12": 0,"lalrib12": 0,"rprib1": 0,"rplrib1": 0,"ralrib1": 0,"rprib2": 0,"rplrib2": 0,"ralrib2": 0,"rarib2": 0,"rprib3": 0,"rplrib3": 0,"ralrib3": 0,"rarib3": 0,"rprib4": 0,"rplrib4": 0,"ralrib4": 0,"rarib4": 0,"rprib5": 0,"rplrib5": 0,"ralrib5": 0,"rarib5": 0,"rprib6": 0,"rplrib6": 0,"ralrib6": 0,"rarib6": 0,"rprib7": 0,"rplrib7": 0,"ralrib7": 0,"rarib7": 0,"rprib8": 0,"rplrib8": 0,"ralrib8": 0,"rarib8": 0,"rprib9": 0,"rplrib9": 0,"ralrib9": 0,"rarib9": 0,"rprib10": 0,"rplrib10": 0,"ralrib10": 0,"rarib10": 0,"rprib11": 0,"rplrib11": 0,"ralrib11": 0,"rprib12": 0,"rplrib12": 0,"ralrib12": 0}
            # print(rib_counts)

            if len(patient_serializer.data) > 0:
                for patient in patient_serializer.data:
                    for key in patient.keys():
                        if key in rib_counts.keys() and patient[key] == 1:
                            rib_counts[key] += 1
            rib_counts = json.dumps(rib_counts)
        
            return Response({
                'patients': patient_serializer.data,
                'filters': serializer.data,
                'rib_counts': rib_counts
            })
        except:
            return Response([])
            #return redirect(patients_list)


    elif request.method == 'POST':
        serializer = FilterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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