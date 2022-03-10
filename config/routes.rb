Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'

  root to: 'application#website'
  get '/panel(/*path)', to: 'application#panel', as: :panel
  get '/(*path)', to: 'application#website', as: :website
end
