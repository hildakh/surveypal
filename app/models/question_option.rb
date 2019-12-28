class QuestionOption < ApplicationRecord
  belongs_to :question
  has_many :survey_question_answer

  validates :option_text , presence: true
  validates :serialorder , presence: true
end
