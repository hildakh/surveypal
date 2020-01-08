class Survey < ApplicationRecord
  has_many :survey_questions
  belongs_to :user
  belongs_to :city
end
