Rails.application.routes.draw do
  root 'movies#index'

  resources :movies
  resources :actors

  namespace :api do
    resources :movies
  end
end
