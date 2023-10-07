from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']

class TodoListView(APIView):

    def get(self, request):
        # Implement this method - return all todo items from db instance above.
        todoData = db['todo_collection'].find()

        todoList = []
        for item in list(todoData) :
            todoList.append(item['todo'])
        return Response(todoList, status=status.HTTP_200_OK)
        
    def post(self, request):
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        db['todo_collection'].insert_one(request.data)
        return Response("Success", status=status.HTTP_200_OK)

