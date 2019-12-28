class SurveyQuestionAnswer < ApplicationRecord
  belongs_to :user
  belongs_to :survey
  belongs_to :question
  belongs_to :question_option

  validates :answer_text, presence: true
end
