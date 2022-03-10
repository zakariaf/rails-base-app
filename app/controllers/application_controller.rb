class ApplicationController < ActionController::Base
  include Pagy::Backend

  after_action { pagy_headers_merge(@pagy) if @pagy }

  def website
    render template: 'layouts/website'
  end

  def panel
    render template: 'layouts/panel'
  end
end
