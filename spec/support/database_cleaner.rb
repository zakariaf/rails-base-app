# frozen_string_literal: true

require 'database_cleaner/active_record'

RSpec.configure do |config|
  # start by truncating all the tables but then use the faster transaction strategy the rest of the time.
  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
    DatabaseCleaner.strategy = :transaction
  end

  # start the transaction strategy as examples are run
  config.around do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end
end
