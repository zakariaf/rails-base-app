# frozen_string_literal: true

# == Schema Information
#
# Table name: allowlisted_jwts
#
#  id         :bigint           not null, primary key
#  jti        :string           not null
#  aud        :string
#  exp        :datetime         not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_allowlisted_jwts_on_jti      (jti) UNIQUE
#  index_allowlisted_jwts_on_user_id  (user_id)
#
require 'rails_helper'

RSpec.describe AllowlistedJwt, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
