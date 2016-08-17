Rails.application.routes.draw do
  get 'index/index'
  
  root 'index#index'
  
  
  post 'hit', to: 'index#hit', as: :hit
  get 'hit', to: redirect('/')


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
