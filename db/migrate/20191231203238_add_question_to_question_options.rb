class AddQuestionToQuestionOptions < ActiveRecord::Migration[6.0]
  def change
    add_reference :question_options, :question, null: false, foreign_key: true
  end
end
