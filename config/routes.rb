Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }
  mount Sidekiq::Web => '/sidekiq'

  root to: 'application#website'
  get '/panel(/*path)', to: 'application#panel', as: :panel
  get '/(*path)', to: 'application#website', as: :website
end
