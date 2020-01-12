class Survey < ApplicationRecord
  has_many :survey_questions
  has_many :survey_responses
  belongs_to :user
  belongs_to :city

  validates :name, presence: true

end
