class AddUserToTeams < ActiveRecord::Migration[6.0]
  def change
    add_reference :teams, :user, null: false, foreign_key: true
  end
end
