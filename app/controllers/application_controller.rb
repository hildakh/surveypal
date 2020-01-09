class ApplicationController < ActionController::API

  # Prevent CSRF attacks by raising an exception. (with: :exception)
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user


end
