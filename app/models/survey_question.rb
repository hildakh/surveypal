class SurveyQuestion < ApplicationRecord
  belongs_to :survey
  belongs_to :question

  validates :serial_order, presence: true
end
