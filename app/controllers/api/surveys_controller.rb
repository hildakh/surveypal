class Api::SurveysController < ApplicationController

  def index
    team_id = TeamMember.where({user_id: params[:user_id]}).select(:team_id)
    survey_id = Team.where({id: team_id}).select(:survey_id)
    surveys = Survey.where({id: survey_id})
    questionlist = surveys[0].survey_questions
    questions = questionlist.map { |question| Question.find(question.question_id)}

    render json: {
      survey: surveys,
      question: questions
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
