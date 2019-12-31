class SurveyQuestionAnswer < ApplicationRecord
  belongs_to :survey
  belongs_to :question
  belongs_to :user
  belongs_to :question_option

end
