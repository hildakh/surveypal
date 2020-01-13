class Admin::UsersController < ApplicationController

  def index
    users = User.where(user_type_id: 2).select(:id, :first_name, :last_name, :email)
    render json: {
      surveyors: users
    }
  end

  def new
  end

  def create
    # Below from jungle user signup
    # user = User.new(user_params)
    # if user.save
    #   session[:user_id] = user.id
    #   redirect_to '/', notice: 'Account created successfully!'
    # else
    #   redirect_to '/signup'
    # end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

    def user_params
      # params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

end