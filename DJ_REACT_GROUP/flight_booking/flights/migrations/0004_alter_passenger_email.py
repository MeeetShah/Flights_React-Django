# Generated by Django 5.1 on 2024-09-22 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0003_passenger_email_passenger_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='passenger',
            name='email',
            field=models.EmailField(default='meet@gmail.com', max_length=254),
        ),
    ]
