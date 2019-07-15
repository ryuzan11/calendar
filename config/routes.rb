Rails.application.routes.draw do
  root 'groups#show'

  devise_for :users

  devise_scope :user do
    get 'login' => 'devise/sessions#new'
    get 'sign_up' => 'devise/registrations#new'
    get 'edit' => 'devise/registrations#edit'
    delete 'logout' => 'devise/sessions#destroy'
  end

  resources :users, only: [:show, :edit, :update]
  resources :groups, only: [:show, :new, :create, :edit, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
