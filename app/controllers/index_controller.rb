require 'pusher'

class IndexController < ApplicationController
  def index
      #Grabs all 'hits' from the db to display the total amount in the index view
      @hits = Hit.all
      #Generates a new Hit object based on the Hit model to enable a form generation that will increment the counter
      @hit = Hit.new

  end
  
  def hit
      
      
      #retrieves the client ip from the remote_ip() method at the ApplicationController, and creates a new entry at the Hits data table
      @hit = Hit.create(client_ip: remote_ip())
      #Generates a new Hit object based on the Hit model to enable a form generation that will increment the counter
      @hit = Hit.new
      #Grabs all 'hits' from the db to display the total amount in the index view
      @hits = Hit.all
      
      #Creates a new pusher client object to allow us to trigger events to pusher channels
      pusher_client = Pusher::Client.new(
                                         app_id: '235602',
                                         key: '29d01404cb03899e6396',
                                         secret: '70f5a6d63a7d8239cd58',
                                         cluster: 'eu',
                                         encrypted: true
                                         )
      #publishes to Pusher Channel counter, an update event cointaing the total ammount of records present at the hits data table
      pusher_client.trigger('counter', 'update', { message: @hits.size})

      #renders the index.html.erb view file instead of looking for one with the same name that this action
      render 'index'
  end
end
