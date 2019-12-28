class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :description
      t.integer :dependant_upon

      t.timestamps
    end
  end
end
