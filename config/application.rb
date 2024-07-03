require_relative "boot"

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
# require "rails/test_unit/railtie"
require "sidekiq/web"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
module BaseApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.1

    # Please, add to the `ignore` list any other `lib` subdirectories that do
    # not contain `.rb` files, or that should not be reloaded or eager loaded.
    # Common ones are `templates`, `generators`, or `middleware`, for example.
    config.autoload_lib(ignore: %w(assets tasks))

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Don't generate system test files.
    config.generators.system_tests = nil

    # Log to STDOUT. You could then collect logs using journald, syslog or forward them somewhere else.
    logger           = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)

    # Set Redis as the back-end for the cache.
    config.cache_store = :redis_cache_store, {
      url: ENV.fetch('REDIS_URL') { 'redis://redis:6379/1' },
      namespace: 'cache'
    }

    # Set Sidekiq as the back-end for Active Job.
    config.active_job.queue_adapter = :sidekiq

    # Mount Action Cable outside the main process or domain.
    config.action_cable.mount_path = nil
    config.action_cable.url = ENV.fetch('ACTION_CABLE_FRONTEND_URL') { 'ws://localhost:28080' }

    # Only allow connections to Action Cable from these domains.
    origins = ENV.fetch('ACTION_CABLE_ALLOWED_REQUEST_ORIGINS') { "http:\/\/localhost*" }.split(',')
    origins.map! { |url| /#{url}/ }
    config.action_cable.allowed_request_origins = origins

    # Protect sidekiq-web
    Sidekiq::Web.use(Rack::Auth::Basic) do |username, password|
      ActiveSupport::SecurityUtils.secure_compare(username, ENV.fetch('SIDEKIQ_WEB_USERNAME', 'sidekiq-web-dashboard')) &&
        ActiveSupport::SecurityUtils.secure_compare(password, ENV.fetch('SIDEKIQ_WEB_PASSWORD', 'sidekiq-web-123'))
    end
  end
end
