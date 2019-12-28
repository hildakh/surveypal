class City < ApplicationRecord
  has_many :survey

  validates :name , presence: true
  validates :description , presence: true

end
