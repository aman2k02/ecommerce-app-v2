from rest_framework.routers import DefaultRouter
from .views import CartItemViewSet, OrderViewSet, MyOrdersView
from django.urls import path

router = DefaultRouter()
router.register('orders', OrderViewSet, basename='orders')
router.register('cart', CartItemViewSet, basename='cart')

urlpatterns = [
    path('my-orders/', MyOrdersView.as_view(), name='my-orders'),
]

urlpatterns += router.urls
