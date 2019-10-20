from django.urls import path


from .views import ArticleListView, ArticleDetailView


urlpatterns = [

    path('', ArticleDetailView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),

]
