<p align="center">
  <a href="https://rubyonrails.org/"><img width="300" src="https://zakaria.dev/assets/images/rails_base_app/Ruby_On_Rails_Logo.png" alt="Ruby On Rails"></a>
  <a href="https://vite-ruby.netlify.app/" style="margin-left: 20px"><img width="110" src="https://zakaria.dev/assets/images/rails_base_app/vite_ruby.svg" alt="Vite Ruby"></a>
  <a href="https://vuejs.org/" style="margin-left: 20px"><img width="90" src="https://zakaria.dev/assets/images/rails_base_app/vuejs-logo.png" alt="Vue.js"></a>
</p>

# An example Rails 7 app

[![](https://badgen.net/badge/Rails/7.0.3.1/red)](https://github.com/zakariaf/rails-base-app/blob/main/Gemfile.lock) [![](https://badgen.net/badge/Ruby/3.1.2/red)](https://github.com/zakariaf/rails-base-app/blob/main/.ruby-version) [![](https://img.shields.io/badge/dynamic/json?color=red&label=Vite&query=%24.devDependencies.vite&url=https%3A%2F%2Fraw.githubusercontent.com%2Fzakariaf%2Frails-base-app%2Fmain%2Fpackage.json)](https://github.com/zakariaf/rails-base-app/blob/main/package.json) [![](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Vue&query=%24.dependencies.vue&url=https%3A%2F%2Fraw.githubusercontent.com%2Fzakariaf%2Frails-base-app%2Fmain%2Fpackage.json)](https://github.com/zakariaf/rails-base-app/blob/main/package.json) [![](https://img.shields.io/badge/dynamic/json?color=blue&label=TypeScript&query=%24.devDependencies.typescript&url=https%3A%2F%2Fraw.githubusercontent.com%2Fzakariaf%2Frails-base-app%2Fmain%2Fpackage.json)](https://github.com/zakariaf/rails-base-app/blob/main/package.json) [![GitHub license](https://img.shields.io/github/license/zakariaf/rails-base-app)](https://github.com/zakariaf/rails-base-app/blob/main/LICENSE)

**This app is built with Rails 7, Ruby 3, Vite, Vue 3 and typescript.** You could use this example app as a base for your upcoming projects. Or, you could use it as a tutorial that tells you which steps you need to take to create a project from scratch.

Several gems and packages are included in this example app that I've been using for a long time. It wires up a number of things you might use in a real world Rails app. However, at the same time it's not loaded up with a million personal opinions.

- As [Webpacker](https://github.com/rails/webpacker#webpacker-has-been-retired-) has been retired, we are using [Vite](https://vite-ruby.netlify.app/) instead. It wouldn't be fair if I didn't say that: **Vite** is fantastic.

## Tech stack

Initially, I used the `rails new baseapp -c tailwindcss -d postgresql` command to initialize the project using the importmaps and default configurations, but I have since removed the importmaps, tailwindcss, and all default configurations in favor of using Vite.
You can see a list of gems that are in the project with a link to their commit. Therefore, you can easily find what we configured for each gem.

**Note** there is a commit/branch for each gem/package and adding/changing a code in the repo, and you can see the list of the steps we did in order at the below. e.g. step 1 in the repo was **init project** and using **PostgreSQL**. step number 2 was adding **RSpec**, etc.

### Back-end

- 1- [PostgreSQL](https://www.postgresql.org/) ([init project](https://github.com/zakariaf/rails-base-app/commit/f62b5cfab5a58aff5f233d3f05b5e5b157d5a5c9))
- 2- [RSpec](https://github.com/rspec/rspec-metagem) ([commit1](https://github.com/zakariaf/rails-base-app/commit/9363d5196130661481ebad2f4067f88b5558ed8e)) ([commit2](https://github.com/zakariaf/rails-base-app/commit/98b97191858a41055c624a9668627a63efa2393f))
- 3- [Factory Bot Rails](https://github.com/thoughtbot/factory_bot_rails) ([commit](https://github.com/zakariaf/rails-base-app/commit/6345a47aab301abf731678bc70a29af67c8d6d64))
- 4- [Faker](https://github.com/faker-ruby/faker) ([commit](https://github.com/zakariaf/rails-base-app/commit/436743fccee0e9f2d72a2af556dcb2bccea0d44e))
- 5- [Database Cleaner](https://github.com/DatabaseCleaner/database_cleaner) ([commit](https://github.com/zakariaf/rails-base-app/commit/653e37e65260ad1b28f699d08ddf206054800810))
- 6- [SimpleCov](https://github.com/simplecov-ruby/simplecov) ([commit](https://github.com/zakariaf/rails-base-app/commit/a1e629b26bf45f008d27ca4ae1a794de65581e2c))
- 7. Rubocop(Check the [**Healthy app/Backend**](#healthy-app) part)
- 8- [Annotate](https://github.com/ctran/annotate_models) ([commit](https://github.com/zakariaf/rails-base-app/commit/5c2a5d2480bbfdd7afd148fc08dc02bda324fc0e))
- 9- [Pry](https://github.com/pry/pry) ([commit](https://github.com/zakariaf/rails-base-app/commit/fd94d91fda2e28293266b3f210801e8462fad4cb))
- 10- [Pagy](https://github.com/ddnexus/pagy) ([commit1](https://github.com/zakariaf/rails-base-app/commit/f5c4839ba05fe8a927bb18e06e89b0fb20f12045)) ([commit2](https://github.com/zakariaf/rails-base-app/commit/090194eb6912a72ec23349afbca1d3e211204769))
- 11- [HasScope](https://github.com/heartcombo/has_scope) ([commit](https://github.com/zakariaf/rails-base-app/commit/a1564e9f8ee645b5b6394bc99608d57eef95b830))
- 12- [JSON:API serializer](https://github.com/jsonapi-serializer/jsonapi-serializer) A fast JSON:API serializer for Ruby Objects ([commit](https://github.com/zakariaf/rails-base-app/commit/c57cb9db2c0df761e48bdae77971d5fd093033bb))
  - [jsonapi.rb](https://github.com/stas/jsonapi.rb) which provides some features for `jsonapi-serializer` [PR](https://github.com/zakariaf/rails-base-app/pull/9), [commit](https://github.com/zakariaf/rails-base-app/commit/b463d3a024513040c52b0745d042ee1fd9ea96aa) and [PR2](https://github.com/zakariaf/rails-base-app/pull/13)
  - [jsonapi-rspec](https://github.com/jsonapi-rb/jsonapi-rspec) which provides some beautiful RSpec matchers for JSON API [PR](https://github.com/zakariaf/rails-base-app/pull/10)
- 13- [Action Cable](https://guides.rubyonrails.org/action_cable_overview.html) ([commit](https://github.com/zakariaf/rails-base-app/commit/3d6bd4194c3a992c838093bb8c8c7332784cffba))
- 14- [Redis](https://redis.io/) ([commit](https://github.com/zakariaf/rails-base-app/commit/3d6bd4194c3a992c838093bb8c8c7332784cffba))
- 15- [Sidekiq](https://github.com/mperham/sidekiq) ([commit](https://github.com/zakariaf/rails-base-app/commit/f7b759d9d42ce3444a04978fe2cbfc66cd120250))
- 16- [dotenv](https://github.com/bkeepers/dotenv) ([commit](https://github.com/zakariaf/rails-base-app/commit/3aaa696c4228aac2dac40ff42591f07dc74a62bb))

### Front-end

- 17- [Vite](https://github.com/ElMassimo/vite_ruby) Removing importmaps and all frontend libraries and Use Vite instead ([PR](https://github.com/zakariaf/rails-base-app/pull/1))
- 18- Code quality and format (Check **Healthy app/Frontend** part)
- 19- [Vue.js](https://vuejs.org/) Vue.js version 3 ([PR](https://github.com/zakariaf/rails-base-app/pull/4) , [PR-fixbug](https://github.com/zakariaf/rails-base-app/pull/11))
- 27- Enabling auth process(and make the app ready) which needed more packages [PR](https://github.com/zakariaf/rails-base-app/pull/15):
  - [axios](https://www.npmjs.com/package/axios)
  - [pinia](https://pinia.vuejs.org/introduction.html) The official state management library for Vue. will be used instead of **Vuex**
  - [vue-query](https://www.npmjs.com/package/vue-query)
  - [@babel/types](https://babeljs.io/docs/en/babel-types)
  - We start using [TypeScript](https://www.typescriptlang.org/) and [Vue3 compistion API](https://vuejs.org/guide/extras/composition-api-faq.html) here

### Healthy app

#### Frontend

- 18- Code quality and format ([PR1](https://github.com/zakariaf/rails-base-app/pull/2), [PR2](https://github.com/zakariaf/rails-base-app/pull/3))
  - [ESlint](https://eslint.org/)
  - [Eslint plugin vue](https://eslint.vuejs.org/rules/)
  - [Prettier](https://prettier.io/)
  - [Husky](https://typicode.github.io/husky/#/)
  - [lint-staged](https://github.com/okonet/lint-staged)

#### Backend

- 7- [RuboCop](https://github.com/rubocop/rubocop) Code quality and format. First I added [rubocop-rails_config gem](https://github.com/toshimaru/rubocop-rails_config) by these two commits ([commit1](https://github.com/zakariaf/rails-base-app/commit/abfdce196721e517b9391b618093506fe062c499)) ([commit2](https://github.com/zakariaf/rails-base-app/commit/89e675b793a0467b271e91c85215a6539bcc4b57)), but after a while, I removed this gem and added rubocop gem and its extensions separately in this [PR](https://github.com/zakariaf/rails-base-app/pull/8)

- 20- [Brakeman](https://github.com/presidentbeef/brakeman) Checking Ruby on Rails applications for security vulnerabilities. you can check `config/brakeman.ignore` to see ignore errors ([PR](https://github.com/zakariaf/rails-base-app/pull/7))
- 21- [bundler-audit](https://github.com/rubysec/bundler-audit) Patch-level verification for bundler ([PR](https://github.com/zakariaf/rails-base-app/pull/7))
- 22- [Fasterer](https://github.com/DamirSvrtan/fasterer) Make Rubies code faster by suggestion some speed improvements. check `.fasterer.yml` to enable/disable suggestions ([PR](https://github.com/zakariaf/rails-base-app/pull/7))
- 23- [License Finder](https://github.com/pivotal/LicenseFinder) Check the licenses of the gems and packages. you can update `doc/dependency_decisions.yml` to manage licenses ([PR](https://github.com/zakariaf/rails-base-app/pull/7))

#### Common

- 24- [overcommit](https://github.com/sds/overcommit) to manage and configure Git hooks by managing all healthy app tools. you can check `.overcommit.yml` to enable or disable tools. ([PR](https://github.com/zakariaf/rails-base-app/pull/7))
- 25- Enabling github action to run `overcommit` after push and pull requests in github. Check `.github/workflows/lint.yml` to see the github configs ([PR](https://github.com/zakariaf/rails-base-app/pull/7))

## Auth

- 26- [Devise](https://github.com/heartcombo/devise) and [Devise::JWT](https://github.com/waiting-for-dev/devise-jwt) JWT authentication solution [Backend PR1](https://github.com/zakariaf/rails-base-app/pull/6), [Backend PR2](https://github.com/zakariaf/rails-base-app/pull/12)

We are using JWT to authentication using Devise and Devise::JWT gems. If you send a request to log in, the successful response will give you a header called `Authorization` which has the JWT token as value. and you need to add this header and its value to all of your requests.

Predefined auth routes:

### `/signup`

**Request**:

```
curl -XPOST -H "Content-Type: application/json" -d '{ "user": { "email": "test@example.com", "password": "12345678", "password_confirmation": "12345678" } }' http://localhost:3000/signup
```

**Response**: Returns the details of the created user

```
{"data":{"id":"4","type":"user","attributes":{"email":"test@example.com","sign_in_count":1,"created_at":"2022-04-18T17:49:06.798Z"}}}
```

### `/login`

**Request**:

```bash
curl -XPOST -i -H "Content-Type: application/json" -d '{ "user": { "email": "test@example.com", "password": "12345678" } }' http://localhost:3000/login
```

**Response**: includes `Authorization` in header and details of the loggedin user

```bash
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 0
X-Content-Type-Options: nosniff
X-Download-Options: noopen
....
Content-Type: application/vnd.api+json; charset=utf-8
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjUwMzA0MjU3LCJleHAiOjE2NTAzOTA2NTcsImp0aSI6IjM4ZmI4ZGIyLWVlMjgtNDg2Yy05YjE5LTA2NWVmYmQ0ZGE4MCJ9.p8766vPrhiGpPyV2FdShw1ljBx2Os3D1oE_rPjjAYrY
...

{"data":{"id":"4","type":"user","attributes":{"email":"test@example.com","sign_in_count":2,"created_at":"2022-04-18T17:49:06.798Z"}}}
```

<img width="400" src="https://zakaria.dev/assets/images/rails_base_app/login.png" alt="Login">

### `/logout`

**Request**: includes `Authorization` and its JWT token in the header of `DELETE` request

```bash
curl -XDELETE -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjUwMzA0MjU3LCJleHAiOjE2NTAzOTA2NTcsImp0aSI6IjM4ZmI4ZGIyLWVlMjgtNDg2Yy05YjE5LTA2NWVmYmQ0ZGE4MCJ9.p8766vPrhiGpPyV2FdShw1ljBx2Os3D1oE_rPjjAYrY" -H "Content-Type: application/json" http://localhost:3000/logout
```

**Response**: nothing

<img width="400" src="https://zakaria.dev/assets/images/rails_base_app/logout.png" alt="Logout">

**Note** We are using JWT to authentication, it means you can use this Rails base app as a **vanilla rails app** (Backend and frontend together), or as a **Rails API app**. both you can use.

## Apps

I always prefer to have two apps for my projects, one for the part that will be shown public (I called it **Website**), and the second one for the part that you are managing there (I called it **Panel**), simplify you need to log in to have access there.

If you can check the codes you can see that there are two layout view files and two actions in application_controller, and two routes in routes.rb file. and for frontend there are two different entrypoints and routers ane etc.

In this case, you can use different technologies and UI Component Libraries in frontend, e.g. use [Vuetify](https://vuetifyjs.com/en/) for **Website** and use [VueTailwind](https://www.vue-tailwind.com/) for **Panel**. or even (it's a bit headache) but you can use [React](https://reactjs.org/) for **Website** and use [Vue.js](https://vuejs.org/) for **Panel**.

Two simple html/css templates have been added for **Website** and **Panel**. you can remove them easily

![Website and Panel preview](https://zakaria.dev/repos_images/website.png)

## Running this app

You need to do few small steps to run the app

### Clone the repo

```sh
git clone https://github.com/zakariaf/rails-base-app baseapp
cd baseapp
```

### Copy example file

```sh
cp .env.example .env.local
```

Environment variables defined here(`.env`), feel free to change or add variables as needed.
This file is ignored from git (Check `.gitignore`) so it will never be commit.

If you use different values for environment variables in other envs, e.g. **test**, you need to copy one more: `.env.test.local`

**Note** `.env.test` is used by github workflows.

### Setup the project

create databases

```sh
rails db:setup
```

### start the project

- rails server

  ```sh
  rails s
  ```

- frontend app

  ```sh
  yarn dev
  ```

## Renaming the project

This app is named `baseapp` and the module is named `BaseApp`. But for sure you would like to have a different name.

The only thing you need to do is just running the `bin/rename-project yourappname YouAppName` script.
as you see this script needs 2 arguments:

- First argument: The lower case version of your app's name, such as `myapp` or `my_app` depending on your preference.
- First argument: Used for your app's module name. such as `MyApp`

`bin/rename-project myapp MyApp`

This script is going to:

- Perform a number of find / replace actions
- Initialize a new git repo for you (Optionally)

After that, If you're happy with your new project's name you can delete this
script.

Or you can keep it around in case you decide to change your project's
name later on.

I got the rename script idea and codes from [Docker Rails Example](https://github.com/nickjj/docker-rails-example#running-a-script-to-automate-renaming-the-project) project with some small changes.

## TODO

- [ ] Add cypress
- [ ] Dockerize
- [ ] automatic deploy process using capistrano
- [ ] add .gitlab-ci
