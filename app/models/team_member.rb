class TeamMember < ApplicationRecord
  belongs_to :team
  belongs_to :user

  validates :active, presence: true
end
