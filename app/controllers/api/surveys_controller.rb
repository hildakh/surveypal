class Api::SurveysController < ApplicationController

  def index
    surveys = Survey.where({user_id: params[:user_id]})
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

end
