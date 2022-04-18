Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'
  devise_for :users, defaults: { format: :json },
                     path: '',
                     path_names: {
                       registration: 'signup'
                     },
                     controllers: {
                       registrations: 'registrations'
                     }

  root to: 'application#website'
  get '/panel(/*path)', to: 'application#panel', as: :panel
  get '/(*path)', to: 'application#website', as: :website
end
