Rails.application.routes.draw do
  root 'users#index'

  devise_for :users

  devise_scope :user do
    get 'login' => 'devise/sessions#new'
    get 'sign_up' => 'devise/registrations#new'
    get 'edit' => 'devise/registrations#edit'
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  resources :users, only: [:index, :show, :edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :tasks, only: [:index, :create, :update, :destroy ]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
