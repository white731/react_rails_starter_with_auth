class Api::ThingsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: Thing.all
  end

  
end
