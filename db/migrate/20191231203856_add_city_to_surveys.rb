class AddCityToSurveys < ActiveRecord::Migration[6.0]
  def change
    add_reference :surveys, :city, null: false, foreign_key: true
  end
end
