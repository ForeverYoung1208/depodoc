Rails.application.routes.draw do

  resources :logs
  resources :opstate_changes
  resources :operations
  resources :companies
  resources :optypes
  resources :doctypes
  resources :docstate_changes
  resources :opstates
  resources :docstates
  resources :documents
  resources :faces
	resources :sessions
  resources :roles_users
  resources :roles

  resources :users, only: [:index, :show] do
    get 'current', to: 'users#current', on: :collection
  end
  post 'users', to: "users#update_roles", as: "update_roles"

  
	root :to => "sessions#new"

end
