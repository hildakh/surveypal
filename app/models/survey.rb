class Survey < ApplicationRecord
  belongs_to :user
  belongs_to :city
  has_many :survey_question_answer

  validates :name , presence: true
  validates :description , presence: true
  
end
