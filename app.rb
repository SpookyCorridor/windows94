require 'bundler'
Bundler.require

require 'sinatra/base'

class Invigoron < Sinatra::Base

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
	
	get '/contact' do
		erb :error, :layout => false 
	end 
end 