class Question < ApplicationRecord
  has_many :question_options
  belongs_to :question, optional: true
  belongs_to :question_type

  validates :description, presence: true
end
