# Generated by Django 3.2.10 on 2023-02-20 13:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_auto_20230220_1648'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='tag',
            new_name='tags',
        ),
    ]
