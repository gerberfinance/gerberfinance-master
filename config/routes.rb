Gerber::Application.routes.draw do
	
	match 'contact' => 'contact#new', :as => 'contact', :via => :get
	match 'contact' => 'contact#create', :as => 'contact', :via => :post
	  
	match '/' => 'static_pages#home'
	match '/about' => 'static_pages#about'
	match '/history' => 'static_pages#history'
	match '/credit' => 'static_pages#credit'
	match '/profiles' => 'static_pages#profiles'
	match '/asset' => 'static_pages#asset'
	match '/trade' => 'static_pages#trade'
	match '/yes' => 'static_pages#current'
	match '/YES' => 'static_pages#current'
	match '/gerberCO' => 'static_pages#comingsoon'
	match '/home' => 'static_pages#gerber'	
	match '/top10' => 'model#top10'
	match '/gear' => 'model#gear'
	match '/calc' => 'model#calc'
	match '/calculator' => 'model#calculator'
	match '/flash' => 'model#flash'
	match '/drewestate' => 'model#drewestate'
	match '/paramount' => 'model#paramount'
	match '/schofield' => 'model#schofield'
	match '/gerber' => 'static_pages#gerber'
	match '/yes_pop' => 'model#yes_pop'
	match '/close' => 'model#close'
	match '/borrowing' => 'static_pages#borrowing'
	match '/testimonials' => 'static_pages#current'
	match '/updates' => 'static_pages#updates'
	match '/who' => 'static_pages#who'
	match '/numi_tea' => 'static_pages#numi'

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
root :to => 'static_pages#home'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
