class AddSurveyToTeam < ActiveRecord::Migration[6.0]
  def change
    add_reference :teams, :survey, null: false, foreign_key: true
  end
end
