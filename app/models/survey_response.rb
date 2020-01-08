class SurveyResponse < ApplicationRecord
  has_many :question_reponses
  
  belongs_to :survey
  belongs_to :user
end
