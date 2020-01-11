class Team < ApplicationRecord
  belongs_to :user
  belongs_to :survey

  validates :name, presence: true
end
