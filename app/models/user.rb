class User < ApplicationRecord
  belongs_to :user_type
  has_many :teams
  has_many :surveys
  has_many :survey_responses

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
end
