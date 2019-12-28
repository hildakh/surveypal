class Team < ApplicationRecord
  belongs_to :user
  has_many :team_member

  validates :name , presence: true
  validates :description , presence: true
  validates :purpose , presence: true
end
