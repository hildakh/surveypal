class Survey < ApplicationRecord
  has_many :survey_questions
  has_many :survey_responses
  belongs_to :user
  belongs_to :city

  has_many :questions, through: :survey_questions

  validates :name, presence: true

end
