# CHANGELOG

## 10 may 2023

- Upgrade FrontEnd packages
- Upgrade gems

## 9 April 2023

- Frontend changes
  - Downgrade **Typescript** 5.0.3 -> 4.9.5
  - Remove definition of `@` in `vite.config.ts` file
  - Improve error handling in `app/javascript/services/http.service.ts` file
- Backend changes
  - use the alpine version of the postgres and redis images
  - upgrade gems:
    - rubocop-performance 1.16.0 -> 1.17.1

## 7 April 2023 - 2

- upgrade redis tag
  - `docker-compose.yml`: 7.0.5-alpine -> 7.0.10-alpine
  - `gitlab-ci.yml`: 7.0.5 -> 7.0.10
- upgrade postgres tag
  - `docker-compose.yml`: 15.0-alpine -> 15.2-alpine
  - `gitlab-ci.yml`: 15.0 -> 15.2
- Upgrade Front-End packages
  - pinia 2.0.33 -> 2.0.34
  - lint-staged 13.2.0 -> 13.2.1
  - eslint 8.37.0 -> 8.38.0
- Configure Renovate

## 7 April 2023 - 1

- Upgrade Front-End packages
  - **typescript** 4.9.5 -> **5.0.3**
  - @babel/types 7.20.7 -> 7.21.4
  - @types/node 18.13.0 -> 18.15.11
  - @typescript-eslint/eslint-plugin 5.51.0 -> 5.57.1
  - @typescript-eslint/parser 5.51.0 -> 5.57.1
  - @vitejs/plugin-vue 4.0.0 -> 4.1.0
  - @vue/eslint-config-prettier 7.0.0 -> 7.1.0
  - axios 1.3.2 -> 1.3.5
  - eslint 8.34.0 -> 8.37.0
  - eslint-config-prettier 8.6.0 -> 8.8.0
  - eslint-plugin-vue 9.9.0 -> 9.10.0
  - lint-staged 13.1.1 -> 13.2.0
  - pinia 2.0.30 -> 2.0.33
  - prettier 2.8.4 -> 2.8.7
  - sass 1.58.0 -> 1.61.0
  - vite 4.1.1 -> 4.2.1
  - vite-plugin-ruby 3.1.3 -> 3.2.1
  - vue-tsc 1.0.24 -> 1.2.0
- Upgrade gems
  - Rails gems 7.0.4.2 -> 7.0.4.3
  - addressable 2.8.1 -> 2.8.3
  - brakeman 5.4.0 -> 5.4.1
  - capybara 3.38.0 -> 3.39.0
  - concurrent-ruby 1.2.0 -> 1.2.2
  - connection_pool 2.3.0 -> 2.4.0
  - database_cleaner-active_record 2.0.1 -> 2.1.0
  - debug 1.7.1 -> 1.7.2
  - devise 4.8.1 -> 4.9.2
  - dry-auto_inject 1.0.0 -> 1.0.1
  - fasterer 0.10.0 -> 0.10.1
  - irb 1.6.2 -> 1.6.3
  - loofah 2.19.1 -> 2.20.0
  - minitest 5.17.0 -> 5.18.0
  - msgpack 1.6.0 -> 1.7.0
  - nio4r 2.5.8 -> 2.5.9
  - nokogiri 1.14.1 -> 1.14.2
  - pagy 6.0.1 -> 6.0.3
  - parser 3.2.1.0 -> 3.2.2.0
  - pg 1.4.5 -> 1.4.6
  - puma 6.0.2 -> 6.2.1
  - rack 2.2.6.2 -> 2.2.6.4
  - rack-cors 1.1.1 -> 2.0.1
  - rack-test 2.0.2 -> 2.1.0
  - redis-client 0.12.1 -> 0.14.1
  - reline 0.3.2 -> 0.3.3
  - rspec-mocks 3.12.3 -> 3.12.5
  - rubocop 1.45.1 -> 1.49.0
  - rubocop-ast 1.24.1 -> 1.28.0
  - rubocop-capybara 2.17.0 -> 2.17.1
  - rubocop-rails 2.17.4 -> 2.19.0
  - rubocop-rspec 2.18.1 -> 2.19.0
  - ruby-progressbar 1.11.0 -> 1.13.0
  - ruby_parser 3.19.2 -> 3.20.0
  - selenium-webdriver 4.8.0 -> 4.8.6
  - sidekiq 7.0.3 -> 7.0.8
  - timeout 0.3.1 -> 0.3.2
  - vite_ruby 3.2.14 -> 3.3.0
- Remove empty model spec files to fix rubocop errors

## 19 February 2023

- Add shoulda-matchers gem and its configuration

## 14 February 2023

- Add gitlab-ci.yml file

## 13 February 2023

- Improve Dokerfile by:
  - Adding test layer
  - Installing gems for all environments
  - Uninstalling the default **bundler** gem and install a specific version of it

## 11 February 2023

- Upgrade **Ruby** 3.1.3 -> 3.2.1
- Upgrade gems
  - bundler 2.3.11 -> 2.4.6
  - rspec-rails 5.0.3 -> 6.0.1
  - parser 3.2.0.0 -> 3.2.1.0
  - ransack 3.2.1 -> 4.0.0
  - regexp_parser 2.6.2 -> 2.7.0
  - rubocop 1.44.1 -> 1.45.1
  - vite_rails 3.0.13 -> 3.0.14
  - zeitwerk 2.6.6 -> 2.6.7
- Upgrade Front-End packages
  - eslint 8.33.0 -> 8.34.0

## 08 February 2023

- Upgrade **Ruby** 3.1.2 -> 3.1.3
- Upgrade **Rails** 7.0.4 -> 7.0.4.2
- Upgrade gems
  - bootsnap 1.15.0 -> 1.16.0
  - concurrent-ruby 1.1.10 -> 1.2.0
  - date 3.3.2 -> 3.3.3
  - debug 1.7.0 -> 1.7.1
  - dry-auto_inject 0.9.0 -> 1.0.0
  - dry-cli 0.7.0 -> 1.0.0
  - dry-configurable 0.16.1 -> 1.0.1
  - dry-core 0.9.1 -> 1.0.0
  - erubi 1.11.0 -> 1.12.0
  - faker 3.0.0 -> 3.1.1
  - globalid 1.0.0 -> 1.1.0
  - has_scope 0.8.0 -> 0.8.1
  - irb 1.6.1 -> 1.6.2
  - jwt 2.5.0 -> 2.7.0
  - mail 2.8.0 -> 2.8.1
  - mini_portile2 2.8.0 -> 2.8.1
  - minitest 5.16.3 -> 5.17.0
  - net-imap 0.3.2 -> 0.3.4
  - nokogiri 1.13.10 -> 1.14.1
  - overcommit 0.59.1 -> 0.60.0
  - pagy 5.10.1 -> 6.0.1
  - parser 3.1.3.0 -> 3.2.0.0
  - pry 0.14.1 -> 0.14.2
  - puma 6.0.0 -> 6.0.2
  - racc 1.6.1 -> 1.6.2
  - rack 2.2.4 -> 2.2.6.2
  - rack-proxy 0.7.4 -> 0.7.6
  - rails-html-sanitizer 1.4.4 -> 1.5.0
  - railties 7.0.4 -> 7.0.4.2
  - redis 5.0.5 -> 5.0.6
  - redis-client 0.11.2 -> 0.12.1
  - regexp_parser 2.6.1 -> 2.6.2
  - responders 3.0.1 -> 3.1.0
  - rspec-core 3.12.0 -> 3.12.1
  - rspec-expectations 3.12.1 -> 3.12.2
  - rspec-mocks 3.12.1 -> 3.12.3
  - rubocop 1.40.0 -> 1.44.1
  - rubocop-ast 1.24.0 -> 1.24.1
  - rubocop-performance 1.15.1 -> 1.16.0
  - rubocop-rails 2.17.3 -> 2.17.4
  - rubocop-rspec 2.16.0 -> 2.18.1
  - rubocop-capybara 2.17.0
  - selenium-webdriver 4.7.1 -> 4.8.0
  - sidekiq 7.0.2 -> 7.0.3
  - simplecov 0.21.2 -> 0.22.0
  - tzinfo 2.0.5 -> 2.0.6
  - unicode-display_width 2.3.0 -> 2.4.2
  - vite_ruby 3.2.13 -> 3.2.14
  - warden-jwt_auth 0.7.0 -> 0.8.0
- Upgrade Front-End packages
  - @babel/types 7.20.5 -> 7.20.7
  - @types/node 18.11.17 -> 18.13.0
  - @typescript-eslint/eslint-plugin 5.47.0 -> 5.51.0
  - @typescript-eslint/parser 5.47.0 -> 5.51.0
  - axios 1.2.1 -> 1.3.2
  - eslint 8.30.0 -> 8.33.0
  - eslint-config-prettier 8.5.0 -> 8.6.0
  - eslint-plugin-import 2.26.0 -> 2.27.5
  - eslint-plugin-vue 9.8.0 -> 9.9.0
  - husky 8.0.2 -> 8.0.3
  - lint-staged 13.1.0 -> 13.1.1
  - pinia 2.0.28 -> 2.0.30
  - prettier 2.8.1 -> 2.8.4
  - sass 1.57.1 -> 1.58.0
  - typescript 4.9.4 -> 4.9.5
  - vite 4.0.3 -> 4.1.1
  - vue 3.2.45 -> 3.2.47
  - vue-tsc 1.0.16 -> 1.0.24
- Upgrade json5 package to fix vulnerability: Prototype Pollution in JSON5 via Parse Method
- Add nickjj name into the LICENSE file

## 21 December 2022

- Upgrade Front-End packages

  - @babel/types 7.20.2 -> 7.20.5
  - axio 0.27.2 -> 1.2.1
  - pinia 2.0.23 -> 2.0.28
  - vue 3.2.41 -> 3.2.45
  - @types/node 18.11.9 -> 18.11.17
  - @typescript-eslint/eslint-plugin 5.42.0 -> 5.47.0
  - @typescript-eslint/parser 5.42.0 -> 5.47.0
  - @vitejs/plugin-vue 3.2.0 -> 4.0.0
  - eslint 8.26.0 -> 8.30.0
  - eslint-plugin-vue 9.7.0 -> 9.8.0
  - husky 8.0.1 -> 8.0.2
  - lint-staged 13.0.3 -> 13.1.0
  - prettier 2.7.1 -> 2.8.1
  - sass 1.56.0 -> 1.57.1
  - typescript 4.8.4 -> 4.9.4
  - vite 3.2.0 -> 4.0.3
  - vite-plugin-ruby 3.1.2 -> 3.1.3
  - vue-tsc 1.0.9 -> 1.0.16

- Fix axios breaking changes

## 17 December 2022

- Upgrade gems:

  - bootsnap 1.13.0 -> 1.15.0
  - brakeman 5.3.1 -> 5.4.0
  - debug 1.6.3 -> 1.7.0
  - io-console 0.5.11 -> 0.6.0
  - irb 1.4.2 -> 1.6.1
  - json 2.6.2 -> 2.6.3
  - jsonapi.rb 2.0.0 -> 2.0.1
  - license_finder 7.0.1 -> 7.1.0
  - loofah 2.19.0 -> 2.19.1
  - mail 2.7.1 -> 2.8.0
  - net-imap 0.3.1 -> 0.3.2
  - net-protocol 0.1.3 -> 0.2.1
  - nokogiri 1.13.9 -> 1.13.10
  - nokogiri 1.13.9-arm64-darwin -> 1.13.10-arm64-darwin
  - nokogiri 1.13.9-x86_64-linux -> 1.13.10-x86_64-linux
  - parser 3.1.2.1 -> 3.1.3.0
  - pg 1.4.4 -> 1.4.5
  - public_suffix 5.0.0 -> 5.0.1
  - racc 1.6.0 -> 1.6.1
  - rails-html-sanitizer 1.4.3 -> 1.4.4
  - redis-client 0.11.1 -> 0.11.2
  - regexp_parser 2.6.0 -> 2.6.1
  - reline 0.3.1 -> 0.3.2
  - rspec-expectations 3.12.0 -> 3.12.1
  - rspec-mocks 3.12.0 -> 3.12.1
  - rubocop 1.38.0 -> 1.40.0
  - rubocop-ast 1.23.0 -> 1.24.0
  - rubocop-performance 1.15.0 -> 1.15.1
  - rubocop-rails 2.17.2 -> 2.17.3
  - rubocop-rspec 2.15.0 -> 2.16.0
  - ruby_parser 3.19.1 -> 3.19.2
  - selenium-webdriver 4.6.1 -> 4.7.1
  - sidekiq 7.0.1 -> 7.0.2
  - timeout 0.3.0 -> 0.3.1
  - vite_rails 3.0.12 -> 3.0.13
  - vite_ruby 3.2.10 -> 3.2.13
  - zeitwerk 2.6.4 -> 2.6.6

- Fix Rubocop errors
- Accept the new license for `sidekiq` gem (Version 7.0.2)
