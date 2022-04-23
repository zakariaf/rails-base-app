# frozen_string_literal: true

require 'rails_helper'

describe ApplicationController, type: :request do
  shared_examples 'visiting website url' do
    context 'when visiting website url' do
      it 'stays at website' do
        get '/'

        expect(response.request.fullpath).to eq('/')
      end
    end
  end

  context 'when user not logged-in' do
    context 'when visiting panel url' do
      it 'redirects to website' do
        get '/panel'

        expect(response).to redirect_to('/')
      end
    end

    include_examples 'visiting website url'
  end

  context 'when user logged-in' do
    let(:user) { create(:user) }

    before { login(user) }

    context 'when visiting panel url' do
      it 'stay at panel' do
        get '/panel'

        expect(response.request.fullpath).to eq('/panel')
      end
    end

    include_examples 'visiting website url'
  end
end
