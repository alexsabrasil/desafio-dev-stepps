from django.db import models

class Indicator(models.Model):
    name = models.CharField(max_length=100)
    value = models.IntegerField()
    icon = models.CharField(max_length=50)
    color = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name 