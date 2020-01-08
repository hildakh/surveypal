class CreateQuestionResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :question_responses do |t|
      t.references :survey_response, null: false, foreign_key: true
      t.references :question_option, null: false, foreign_key: true

      t.string :response_value, null: true
      t.timestamps
    end
  end
end
