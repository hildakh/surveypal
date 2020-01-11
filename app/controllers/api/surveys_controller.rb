class Api::SurveysController < ApplicationController

  def index
    # team_id = TeamMember.where({user_id: params[:user_id]}).select(:team_id)
    # survey_id = Team.where({id: team_id}).select(:survey_id)
    # surveys = Survey.where({id: survey_id})
    # question_ids = []
    # questions = []

    # surveys.each do |survey|
    #   question_ids << SurveyQuestion.where({survey_id: survey.id})
    # end

    # question_ids.each do |item|
    #   questions << Question.where({id: item[:question_id]})
    #     # survey = {:questions => questions}
    # end

    # ***survey_id = Survey.find(1)
    # ***questions = survey_id.questions

    user_id = User.find(4)
    # team_member = TeamMember.where({user_id: user_id})
    questions = user_id.team





    render json: {
      survey: questions
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
