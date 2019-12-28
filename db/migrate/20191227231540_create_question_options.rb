class CreateQuestionOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :question_options do |t|
      t.integer :question_id
      t.string :option_text
      t.integer :serialorder

      t.timestamps
    end
  end
end
