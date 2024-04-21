from django.db import models

# Create your models here.
class Obesity(models.Model):
    MALE = 1
    FEMALE = 0
    sex = (
        (MALE, 'Male'),
        (FEMALE, 'Female')
    )

    age = models.FloatField()
    sex = models.IntegerField(choices=sex)
    cp = models.FloatField()
    trestbps = models.FloatField()
    chol = models.FloatField()
    fbs = models.FloatField()
    restecg = models.FloatField()
    thalach = models.FloatField()
    exang = models.FloatField()
    oldpeak = models.FloatField()
    slope = models.FloatField()  
    ca = models.FloatField() 
    thal = models.FloatField()       