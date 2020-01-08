class Question < ApplicationRecord
  has_many :question_options
  has_many :survey_questions
  
  belongs_to :question, optional: true
  belongs_to :question_type

  validates :description, presence: true
end
