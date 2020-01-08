class AddSurveyIdColumnToTeams < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :survey_id, :integer, null: false
  end
end
