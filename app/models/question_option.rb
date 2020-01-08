class QuestionOption < ApplicationRecord
  has_many :question_reponses

  belongs_to :question

  validates :option_text , presence: true
  validates :serial_order , presence: true
end
