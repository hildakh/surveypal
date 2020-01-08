class CreateTeamMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :team_members do |t|
      t.boolean :active, null: false

      t.timestamps
    end
  end
end
