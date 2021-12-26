Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'
end
