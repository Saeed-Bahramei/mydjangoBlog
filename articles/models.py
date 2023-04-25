from django.db import models
from django.contrib.auth.models import User
from django import forms

messages = {
    'null' : 'لطفا این فیلد را پر کنید',
    'blank' : 'لطفا این فیلد را پر کنید', 
    'invalid' : 'لطفا این فیلد را پر کنید', 
    'invalid_choice' : 'لطفا این فیلد را پر کنید', 
    'unique' : 'لطفا این فیلد را پر کنید',
    'unique_for_date' : 'لطفا این فیلد را پر کنید',
}

class Article(models.Model):
    title = models.CharField(max_length = 100 , error_messages = messages)
    slug = models.SlugField(error_messages = messages)
    body = models.TextField(error_messages = messages)
    date = models.DateTimeField(auto_now_add = True ,error_messages = messages)
    image = models.ImageField(default='default.jpg', blank=True ,error_messages = messages)
    author = models.ForeignKey(User,default=None,on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def snippet(self):
        return self.body[0:50] + ' ...'