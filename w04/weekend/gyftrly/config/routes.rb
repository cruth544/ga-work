Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'gifts#index'


  get 'gifts/' => 'gifts#index', as: :gifts
  get 'gifts/sort/title' => 'gifts#sort_title', as: :gifts_title
  get 'gifts/sort/friend' => 'gifts#sort_friend', as: :gifts_friend
  get 'gifts/sort/price' => 'gifts#sort_price', as: :gifts_price
  get 'gifts/sort/purchased' => 'gifts#sort_purchased', as: :gifts_purchased

  get 'gifts/new' => 'gifts#new', as: :new_gift
  post 'gifts/' => 'gifts#create'

  get 'gifts/:id/edit' => 'gifts#edit', as: :edit_gift
  patch 'gifts/:id' => 'gifts#update'

  get 'gifts/:id' => 'gifts#show', as: :gift
  delete 'gifts/:id' => 'gifts#destroy'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
