class AddQuestionOrderToSurveyQuestionAnswers < ActiveRecord::Migration[6.0]
  def change
    add_column :survey_question_answers, :question_order, :integer
  end
end
