class Team < ApplicationRecord
  belongs_to :user
  belongs_to :survey
  has_many :team_members

  validates :name, presence: true
end
