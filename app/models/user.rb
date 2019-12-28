class User < ApplicationRecord
  belongs_to :user_type
  has_many :team
  # has_many :survey_question_answer
  has_many :survey
  # has_many :team_member

  validates :name , presence: true
  validates :email , presence: true
end
