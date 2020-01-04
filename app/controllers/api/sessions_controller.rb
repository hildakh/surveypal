class Api::SessionsController < ApplicationController

  def new
    @user = User.all
    # if user = User.authenticate_with_credentials(params[:email]), params[:password])
    #   session[:user_id] = user.id
    #   redirect_to '/'
    # else
    #   redirect_to '/login'
    # end
     render json: @user
  end
  def create
    user = User.all
    # if user = User.authenticate_with_credentials(params[:email]), params[:password])
    #   session[:user_id] = user.id
    #   redirect_to '/'
    # else
    #   redirect_to '/login'
    # end
    puts user
    puts user.inspect
  end
  def destroy
    # session[:user_id] = nil
    # redirect_to '/login'
  end
end