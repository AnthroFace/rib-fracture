from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Patient
from .serializers import *

@api_view(['GET', 'POST'])
def paitents_list(request):
    """
 List  patients, or create a new patient.
 """
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        patients = Patient.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(patients, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = PatientSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/patients/?page=' + str(nextPage), 'prevlink': '/api/patients/?page=' + str(previousPage)})

    elif request.method == 'POST':
        serializer = Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def patients_detail(request, pk):
 """
 Retrieve, update or delete a patient by id/pk.
 """
    try:
        patient = Patient.objects.get(pk=pk)
    except Patient.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PatientSerializer(patient,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PatientSerializer(patient, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        patient.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)