class AddQuestionTypeToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_reference :questions, :question_type, null: false, foreign_key: true
  end
end
