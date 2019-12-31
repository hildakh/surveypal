puts "Seeding Data ..."

## USER_TYPES

puts "Creating user_types ..."

UserType.destroy_all

admin = UserType.create!({
  name: 'Admin',
  description: 'Admins can create users and surveys. They can create teams and add team members.'
})


surveyor = UserType.create!({
  name: 'Surveyor',
  description: 'Surveyors have access to surveys and can complete and submit the surveys.'
})

## ADMIN USERS

puts "Creating users..."

User.destroy_all

admin.users.create!({
first_name: 'Bahar',
last_name: 'Ghadimi',
email: 'bghadimi@msn.com',
password: '123456'
})

admin.users.create!({
first_name: 'Vanessa',
last_name: 'Kroeker',
email: 'vk@msn.com',
password: '123456'
})

admin.users.create!({
first_name: 'Hilda',
last_name: 'Matilda',
email: 'hili@msn.com',
password: '123456'
})

## USERS

surveyor.users.create!({
first_name: 'Hollow',
last_name: 'Knight',
email: 'hollow@msn.com',
password: 'password'
})

surveyor.users.create!({
first_name: 'Yennefer',
last_name: 'Mage',
email: 'yen@msn.com',
password: 'geralt'
})

surveyor.users.create!({
first_name: 'Mary',
last_name: 'Poppins',
email: 'mary@msn.com',
password: 'password'
})

surveyor.users.create!({
first_name: 'Jessica',
last_name: 'Jones',
email: 'jessi@msn.com',
password: 'password'
})

surveyor.users.create!({
  first_name: 'Elsa',
  last_name: 'Frozen',
  email: 'elsa@msn.com',
  password: 'olafolaf'
})

surveyor.users.create!({
  first_name: 'Serena',
  last_name: 'Martins',
  email: 'sari@msn.com',
  password: 'password'
})

surveyor.users.create!({
  first_name: 'Joe',
  last_name: 'Goldberg',
  email: 'you@msn.com',
  password: 'password'
})

surveyor.users.create!({
  first_name: 'Meredith',
  last_name: 'Grey',
  email: 'greys@msn.com',
  password: 'password'
})

surveyor.users.create!({
  first_name: 'Geralt',
  last_name: 'Rivia',
  email: 'roach@msn.com',
  password: 'yennefer'
})
    
## TEAMS
puts "Creating teams ..."

Team.destroy_all

teambahareh = Team.create!({
  name: 'Team Bahareh',
  description: 'Team created by Bahareh',
  purpose: 'To keep track of the surveyors and update them',
  user_id: 1
  })
      
teamvanessa = Team.create!({
  name: 'Team Vanessa',
  description: 'Team created by Vanessa',
  purpose: 'To keep track of the surveyors and update them',
  user_id: 2
})

teamhilda = Team.create!({
  name: 'Team Hilda',
  description: 'Team created by Hilda',
  purpose: 'To keep track of the surveyors and update them',
  user_id: 3
})

# TEAM MEMBERS
puts "Creating team members ..."

TeamMember.destroy_all

TeamMember.create!({
  team_id: 1,
  user_id: 4,
  active: true
})

TeamMember.create!({
  team_id: 1,
  user_id: 5,
  active: true
})

TeamMember.create!({
  team_id: 1,
  user_id: 6,
  active: true
})

TeamMember.create!({
  team_id: 2,
  user_id: 7,
  active: true
})

TeamMember.create!({
  team_id: 2,
  user_id: 8,
  active: true
})

TeamMember.create!({
  team_id: 2,
  user_id: 9,
  active: true
})

TeamMember.create!({
  team_id: 3,
  user_id: 10,
  active: true
})

TeamMember.create!({
  team_id: 3,
  user_id: 11,
  active: true
})

TeamMember.create!({
  team_id: 3,
  user_id: 12,
  active: true
})

## QUESTIONS
puts "Creating questions ..."

Question.destroy_all

Question.create!({
  description: 'This question is independent from any other questions',
  question_id: 1
})


Question.create!({
  description: 'Will you be sleeping in this shelter tonight?',
  question_id: 1
})

Question.create!({
  description: 'Have you already answered a survey today (with
  someone wearing a yellow sticker)?',
  question_id: 1
})

Question.create!({
  description: 'Have you already answered a survey in another
  community in the last 6 weeks?',
  question_id: 1
})

Question.create!({
  description: 'Do you currently have a place to stay where you pay
  monthly rent?',
  question_id: 1
})

Question.create!({
  description: 'How long have you been without a place of your own?',
  question_id: 1
})

Question.create!({
  description: 'How old are you [OR] what year were you born?',
  question_id: 1
})

## QUESTION OPTIONS
puts "Creating question options ..."

QuestionOption.destroy_all

QuestionOption.create!({
  question_id: 1,
  option_text: 'Yes',
  serial_order: 1
})

QuestionOption.create!({
  question_id: 1,
  option_text: 'No',
  serial_order: 2
})

QuestionOption.create!({
  question_id: 1,
  option_text: 'No Answer',
  serial_order: 3
})

QuestionOption.create!({
  question_id: 2,
  option_text: 'Yes',
  serial_order: 1
})

QuestionOption.create!({
  question_id: 2,
  option_text: 'No',
  serial_order: 2
})

QuestionOption.create!({
  question_id: 2,
  option_text: 'No Answer',
  serial_order: 3
})

QuestionOption.create!({
  question_id: 3,
  option_text: 'Yes',
  serial_order: 1
})

QuestionOption.create!({
  question_id: 3,
  option_text: 'No',
  serial_order: 2
})

QuestionOption.create!({
  question_id: 3,
  option_text: 'Don''t know / No Answer',
  serial_order: 3
})

QuestionOption.create!({
  question_id: 4,
  option_text: 'Yes',
  serial_order: 1
})

QuestionOption.create!({
  question_id: 4,
  option_text: 'No',
  serial_order: 2
})

QuestionOption.create!({
  question_id: 4,
  option_text: 'No Answer',
  serial_order: 3
})

QuestionOption.create!({
  question_id: 5,
  option_text: 'Days',
  serial_order: 1
})

QuestionOption.create!({
  question_id: 5,
  option_text: 'Weeks',
  serial_order: 2
})

QuestionOption.create!({
  question_id: 5,
  option_text: 'Months',
  serial_order: 3
})

QuestionOption.create!({
  question_id: 5,
  option_text: 'Years',
  serial_order: 4
})

QuestionOption.create!({
  question_id: 5,
  option_text: 'No Answer',
  serial_order: 5
})

QuestionOption.create!({
  question_id: 6,
  option_text: 'Age',
  serial_order: 1
})

QuestionOption.create!({
  question_id: 6,
  option_text: 'Year Born',
  serial_order: 2
})

QuestionOption.create!({
  question_id: 6,
  option_text: 'No Answer',
  serial_order: 3
})

## CITIES
puts "Creating cities ..."

City.destroy_all

City.create!({
  name: 'Vancouver',
  province: 'BC'
})

City.create!({
  name: 'Calgary',
  province: 'AB'
})

## SURVEYS
puts "Creating surveys ..."

Survey.destroy_all

Survey.create!({
  name: 'Vancouver 2019 Sheltered Survey',
  description: 'To report on the total number of the homeless in the city of Vancouver in 2019',
  user_id: 3,
  city_id: 1
})

puts "DONE!"