# Generated by Django 5.1 on 2024-09-22 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0002_rename_nationality_passenger_middle_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='passenger',
            name='email',
            field=models.EmailField(default='meet@gmail.com', max_length=254, unique=True),
        ),
        migrations.AddField(
            model_name='passenger',
            name='number',
            field=models.CharField(default=1233, max_length=10),
        ),
    ]
