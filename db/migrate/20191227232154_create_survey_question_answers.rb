class CreateSurveyQuestionAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :survey_question_answers do |t|
      t.integer :survey_id
      t.integer :question_id
      t.integer :user_id
      t.integer :question_option_id
      t.string :answer_text

      t.timestamps
    end
  end
end
