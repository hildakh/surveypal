class AddTeamToTeamMembers < ActiveRecord::Migration[6.0]
  def change
    add_reference :team_members, :team, null: false, foreign_key: true
  end
end
