class Survey < ApplicationRecord
  belongs_to :users
  belongs_to :cities

end
