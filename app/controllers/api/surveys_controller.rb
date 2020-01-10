class Api::SurveysController < ApplicationController

  def index
    team_id = TeamMember.where({user_id: params[:user_id]}).select(:team_id)
    survey_id = Team.where({id: team_id}).select(:survey_id)
    surveys = Survey.where({id: survey_id})
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
