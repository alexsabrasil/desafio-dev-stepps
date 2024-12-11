#views.py
from rest_framework import viewsets
from .models import Indicator
from .serializers import IndicatorSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view



from rest_framework.decorators import api_view, permission_classes


class IndicatorViewSet(viewsets.ModelViewSet):
    queryset = Indicator.objects.all()
    serializer_class = IndicatorSerializer
    permission_classes = [IsAuthenticated]

@api_view(['GET'])
@permission_classes([IsAuthenticated])  
def indicators_old(request):
    # Fetch all indicators using the queryset
    indicators = Indicator.objects.all()

    # Serialize the indicators for efficient data transfer
    serializer = IndicatorSerializer(indicators, many=True)

    # Prepare the response data using the serialized data
    data = {
        "indicators": serializer.data,
        "chartData": [{
            "data": [indicator['value'] for indicator in serializer.data],
            "label": "Indicadores"
        }],
        "chartLabels": [indicator['name'] for indicator in serializer.data],
    }

    return Response(data, status=status.HTTP_200_OK)