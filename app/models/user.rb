class User < ApplicationRecord
  belongs_to :user_type
  has_many :teams
  has_many :surveys
  has_many :survey_question_answers

  has_secure_password

  def self.authenticate_with_credentials(email, password)
    user = where('LOWER(email) = ?', email.downcase.delete(' '))[0]
    user && user.authenticate(password)
end

end
