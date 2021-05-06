# json.partial! @user, as :user
json.partial! 'api/users/user', locals: {user: @user}