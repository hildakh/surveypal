class Api::SessionsController < ApplicationController

  def new
  end

  def create
    user = User.authenticate_with_credentials(params[:email], params[:password])
    session[:user_id] = user.id    
    render json: {
      user: user,
      session: session
    }
  end

  def destroy
    session[:user_id] = nil
  end

end