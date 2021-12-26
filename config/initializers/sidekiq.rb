sidekiq_config = { url: ENV.fetch("REDIS_URL") { "redis://redis:6379/1" } }

Sidekiq.configure_server do |config|
  config.logger.level = Logger::WARN
  config.log_formatter = Sidekiq::Logger::Formatters::JSON.new
  config.redis = sidekiq_config
end

Sidekiq.configure_client do |config|
  config.redis = sidekiq_config
end
