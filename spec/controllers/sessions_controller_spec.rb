# frozen_string_literal: true

require 'rails_helper'

describe SessionsController, type: :request do
  let(:user) { create(:user) }
  let(:login_url) { '/users/login' }
  let(:logout_url) { '/users/logout' }

  context 'when logging in' do
    before do
      login(user)
    end

    it 'returns a token' do
      expect(response.headers['Authorization']).to be_present
    end

    it 'returns 200' do
      expect(response.status).to eq(200)
    end

    it 'creates an allowlisted_jwt record' do
      expect(user.allowlisted_jwts.count).to eq(1)
    end
  end

  context 'when email is missing' do
    before do
      post login_url, params: {
        user: {
          email: nil,
          password: user.password
        }
      }
    end

    it 'returns 401' do
      expect(response.status).to eq(401)
    end
  end

  context 'when password is missing' do
    before do
      post login_url, params: {
        user: {
          email: user.email,
          password: nil
        }
      }
    end

    it 'returns 401' do
      expect(response.status).to eq(401)
    end
  end

  context 'when logging out' do
    before do
      login(user)
      delete logout_url, headers: auth_header
    end

    it 'returns 204' do
      expect(response).to have_http_status(:no_content)
    end

    it 'destroys the allowlisted_jwt record' do
      expect(user.allowlisted_jwts.count).to eq(0)
    end
  end
end
