Rails.application.routes.draw do
  root "heroes#index"

  get "heroes/sort"
	resources :heroes, only: [:index, :show]
end
