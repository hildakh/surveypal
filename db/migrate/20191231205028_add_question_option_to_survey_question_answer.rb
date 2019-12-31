class AddQuestionOptionToSurveyQuestionAnswer < ActiveRecord::Migration[6.0]
  def change
    add_reference :survey_question_answers, :question_option, null: false, foreign_key: true
  end
end
