class RemoveQuestionOptionFromSurveyQuestionAnswers < ActiveRecord::Migration[6.0]
  def change
    remove_reference :survey_question_answers, :question_option, null: false, foreign_key: true
  end
end
