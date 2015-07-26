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

	get '/packages' do 
		erb :packages 
	end 

	get '/recruit' do 
		erb :recruit 
	end 
	
	get '/contact' do
		erb :contact 
	end 
end 