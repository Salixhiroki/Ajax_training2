Rails.application.routes.draw do
 
 root 'rps#index'
 get 'rps/new', to: "rps#new"
 
end
