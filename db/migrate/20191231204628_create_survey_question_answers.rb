class CreateSurveyQuestionAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :survey_question_answers do |t|
      t.string :answer_text

      t.timestamps
    end
  end
end
