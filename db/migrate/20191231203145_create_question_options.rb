class CreateQuestionOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :question_options do |t|
      t.string :option_text, null: false
      t.integer :serial_order, null: false

      t.timestamps
    end
  end
end
