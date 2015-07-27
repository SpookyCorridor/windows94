require 'bundler'
Bundler.require

require 'sinatra/base'

class Invigoron < Sinatra::Base

	not_found do
 	 #send results for not found resources
 	 	status 404
 	 #{:status => 404, :message => 'Resource not found.'}.to_json
  		erb :error, :layout => false 
	end
	
	get '/' do 
		erb :index 
	end 

	get '/features' do 
		erb :features 
	end 

	get '/purchase' do 
		erb :purchase, :layout => false 
	end 

	get '/software' do 
		erb :software 
	end 
	
end 