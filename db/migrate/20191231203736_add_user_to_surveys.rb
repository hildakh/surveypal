class AddUserToSurveys < ActiveRecord::Migration[6.0]
  def change
    add_reference :surveys, :user, null: false, foreign_key: true
  end
end
