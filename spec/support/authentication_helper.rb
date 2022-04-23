# frozen_string_literal: true

module AuthenticationHelper
  def login(user)
    post user_session_path, params: {
      user: {
        email: user.email,
        password: user.password
      }
    }

    @loggedin_user_token = response.headers['Authorization']
  end

  def loggedin_user_token
    @loggedin_user_token
  end

  def auth_header
    {
      Authorization: loggedin_user_token
    }
  end
end

RSpec.configure do |config|
  config.include AuthenticationHelper
end
