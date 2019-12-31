class AddUserToSurveyQuestionAnswer < ActiveRecord::Migration[6.0]
  def change
    add_reference :survey_question_answers, :user, null: false, foreign_key: true
  end
end
