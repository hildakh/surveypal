class AddDependentOnToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :dependent_on_question_id, :integer, null: true, index: true
    add_foreign_key :questions, :questions, column: :dependent_on_question_id
  end

end
