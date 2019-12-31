class Question < ApplicationRecord
  has_many :question_options
  belongs_to :question, optional: true
end
