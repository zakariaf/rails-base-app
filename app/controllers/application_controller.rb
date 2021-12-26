class ApplicationController < ActionController::Base
  include Pagy::Backend

  after_action { pagy_headers_merge(@pagy) if @pagy }
end
