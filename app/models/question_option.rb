class QuestionOption < ApplicationRecord
  has_many :question_reponses

  belongs_to :question
end
