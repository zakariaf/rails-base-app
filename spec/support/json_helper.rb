# frozen_string_literal: true

module JsonHelper
  def json
    JSON.parse(response.body)
  end
end

RSpec.configure do |config|
  config.include JsonHelper
end
