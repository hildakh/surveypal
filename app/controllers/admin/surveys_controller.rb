class Admin::SurveysController < ApplicationController

  # http_basic_authenticate_with name: ENV["WEBSITE_USERNAME"], password: ENV["WEBSITE_PASSWORD"]

  def index
    surveys = Survey.all.select(:id, :name)
    render json: surveys
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