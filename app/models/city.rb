class City < ApplicationRecord
  has_many :survey

  validates :name , presence: true
  validates :province , presence: true
end
