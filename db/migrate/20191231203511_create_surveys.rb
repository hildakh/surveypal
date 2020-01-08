class CreateSurveys < ActiveRecord::Migration[6.0]
  def change
    create_table :surveys do |t|
      t.string :name, null: false
      t.string :description
      t.date :end_date

      t.timestamps
    end
  end
end
