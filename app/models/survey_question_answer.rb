class SurveyQuestionAnswer < ApplicationRecord
  belongs_to :surveys
  belongs_to :questions
  belongs_to :users
  belongs_to :question_options

end
