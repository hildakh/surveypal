class User < ApplicationRecord
  belongs_to :user_type
  has_many :team_members
  has_many :surveys
  has_many :survey_responses
  has_many :survey_question_answers

  # has_one :teams, through: :team_members

  validates :email, :uniqueness => { :case_sensitive => false }
  validates :email, presence: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_secure_password

  def self.authenticate_with_credentials(email, password)
    user = where('LOWER(email) = ?', email.downcase.delete(' '))[0]
    user && user.authenticate(password)
end

end
