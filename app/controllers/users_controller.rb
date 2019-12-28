class UsersController < ApplicationController

  def new
  end

  def create  # Is create required at this point, since users cannot create their own new account?
    # user = User.new(user_params)
    # if user.save
    #   session[:user_id] = user.id
    #   redirect_to '/', notice: 'Account created successfully!'
    # else
    #   redirect_to '/signup'
    # end
  end

  private

    def user_params
      # params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

end