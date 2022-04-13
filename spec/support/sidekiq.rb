# frozen_string_literal: true

require 'sidekiq/testing'

Sidekiq::Testing.inline!
Sidekiq.logger.level = Logger::ERROR
