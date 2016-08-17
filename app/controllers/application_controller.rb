class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    def remote_ip
        request.remote_ip
    end
end
