class CreateSurveys < ActiveRecord::Migration[5.2]
  def change
    create_table :surveys do |t|
      t.string :name
      t.string :description
      t.datetime :end_date
      t.integer :created_by
      t.integer :city_id

      t.timestamps
    end
  end
end
