class Admin::SurveysController < ApplicationController

  # http_basic_authenticate_with name: ENV["WEBSITE_USERNAME"], password: ENV["WEBSITE_PASSWORD"]

  def index
    surveys = Survey.where({user_id: params[:user_id]}).select(:id, :name, :description, :end_date, :city_id)
    questions = Question.where({})
    render json: {
      survey: surveys
    }
  end

  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

end