require 'sidekiq/testing'

Sidekiq::Testing.inline!
Sidekiq.logger.level = Logger::ERROR
