Rails.application.routes.draw do
  resources :roles_users
  resources :roles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	resources :sessions
  
	root :to => "sessions#new"

end
