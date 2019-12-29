class Question < ApplicationRecord
  has_many :survey_question_answer
  has_many :question_option

  validates :description, presence: true

end
