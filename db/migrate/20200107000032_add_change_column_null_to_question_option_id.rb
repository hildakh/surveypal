class AddChangeColumnNullToQuestionOptionId < ActiveRecord::Migration[6.0]
  def change
    change_column_null :survey_question_answers, :question_option_id, true
  end
end
