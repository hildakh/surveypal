class QuestionResponse < ApplicationRecord
  belongs_to :survey_response
  belongs_to :question_option
end
