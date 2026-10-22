from rest_framework import viewsets, permissions
from .models import Match, Session, Review
from .serializers import MatchSerializer, SessionSerializer, ReviewSerializer


class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user1=self.request.user)


class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(reviewer=self.request.user)


from rest_framework.decorators import action
from rest_framework.response import Response
from .matching import find_direct_matches, find_chain_matches

class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user1=self.request.user)

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def find_matches(self, request):
        direct = find_direct_matches(request.user)
        chains = find_chain_matches(request.user)

        direct_data = [
            {'other_user': m['other_user'].username, 'their_skill': m['their_offer_skill'].name,
             'my_skill': m['my_offer_skill'].name}
            for m in direct
        ]
        chain_data = [
            [{'user': u.username, 'skill': s.name} for u, s in chain]
            for chain in chains
        ]
        return Response({'direct_matches': direct_data, 'chain_matches': chain_data})