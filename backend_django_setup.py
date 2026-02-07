
# 1. models.py
# from django.db import models
# 
# class ClickEvent(models.Model):
#     event_type = models.CharField(max_length=50, default='cta_click')
#     platform = models.CharField(max_length=50, default='web')
#     created_at = models.DateTimeField(auto_now_add=True)
#
#     class Meta:
#         ordering = ['-created_at']

# 2. views.py
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .models import ClickEvent
# from django.utils import timezone
#
# @api_view(['POST'])
# def track_click(request):
#     ClickEvent.objects.create(
#         event_type=request.data.get('event_type', 'cta_click'),
#         platform=request.data.get('platform', 'web')
#     )
#     return Response({"status": "success"}, status=201)
#
# @api_view(['GET'])
# def get_stats(request):
#     total = ClickEvent.objects.count()
#     last = ClickEvent.objects.first()
#     today_start = timezone.now().replace(hour=0, minute=0, second=0, microsecond=0)
#     today_count = ClickEvent.objects.filter(created_at__gte=today_start).count()
#     
#     return Response({
#         "total_clicks": total,
#         "last_click": last.created_at if last else None,
#         "today_clicks": today_count
#     })

# 3. requirements.txt
# django
# djangorestframework
# django-cors-headers
