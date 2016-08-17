require 'pusher'

class IndexController < ApplicationController
  def index
      @hits = Hit.all
      @hit = Hit.new

  end
  
  def hit
      
      
      
      @client_ip = remote_ip()
      @hit = Hit.new
      @hit.client_ip = remote_ip()
      @hit.save!
      @hit = Hit.new
      @hits = Hit.all
      
      pusher_client = Pusher::Client.new(
                                         app_id: '235602',
                                         key: '29d01404cb03899e6396',
                                         secret: '70f5a6d63a7d8239cd58',
                                         cluster: 'eu',
                                         encrypted: true
                                         )
                                         
      pusher_client.trigger('counter', 'update', { message: @hits.size})

      render 'index'
  end
end
