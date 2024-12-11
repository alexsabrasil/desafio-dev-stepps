from django.db import models

class Indicator(models.Model):
    name = models.CharField(max_length=255)
    value = models.FloatField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
