# frozen_string_literal: true

require 'rails_helper'

describe RegistrationsController, type: :request do
  let(:signup_url) { '/users/signup' }

  let!(:existing_user) { create(:user) }
  let(:email) { Faker::Internet.email }
  let(:password) { Faker::Internet.password(min_length: 10, max_length: 20, special_characters: true) }
  let(:password_confirmation) { password }
  let(:attributes) do
    {
      user: {
        email:,
        password:,
        password_confirmation:
      }
    }
  end

  before do
    post signup_url, params: attributes
  end

  context 'when creating a new user' do
    it 'returns 200' do
      expect(response.status).to eq(200)
    end

    it 'does not return token' do
      # we need to login after registartion
      expect(response.headers['Authorization']).to be_nil
    end

    it 'returns the attributes' do
      expect(json['data']).to have_jsonapi_attributes(:email, :sign_in_count, :created_at)
    end

    it 'returns the user email' do
      expect(json['data']).to have_attribute(:email).with_value(email)
    end
  end

  context 'when an email already exists' do
    let(:email) { existing_user.email }

    it 'returns 400' do
      expect(response.status).to eq(400)
    end

    it 'returns the taken message' do
      expect(json).to have_error('code' => 'taken')
    end
  end

  context 'when password and confirmation are not match' do
    let(:password_confirmation) { '123456Aa!' }

    it 'returns 400' do
      expect(response.status).to eq(400)
    end

    it 'returns the confirmation message' do
      expect(json).to have_error('code' => 'confirmation')
    end
  end
end
