class UserType < ApplicationRecord
  has_many :user

  validates :name , presence: true
  validates :description , presence: true
end
