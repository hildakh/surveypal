class CreateSurveys < ActiveRecord::Migration[5.2]
  def change
    create_table :surveys do |t|
      t.string :name
      t.string :description
      t.string :end_date
      t.string :date
      t.string :user_id
      t.string :integer
      t.string :city_id
      t.string :integer

      t.timestamps
    end
  end
end
