from django import forms
from . import models

messages = {
    'required':'لطفا این فیلد را پر کنید',
    'invalid':'درست نیست',
    'min_length':'تعداد کاراکتر های ورودی کمتر از حد مجاز است',
    'max_length':'تعداد کاراکتر های ورودی بیشتر از حد مجاز است'
}

class profile(forms.Form):
    username = forms.CharField(max_length=30 , error_messages=messages)
    email = forms.EmailField(min_length=5 , error_messages=messages)