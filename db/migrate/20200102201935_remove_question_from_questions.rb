class RemoveQuestionFromQuestions < ActiveRecord::Migration[6.0]
  def change
    remove_reference :questions, :question, null: false, foreign_key: true
  end
end
