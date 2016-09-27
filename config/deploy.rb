#default_run_options[:pty] = true
#  set :repository,  "git://github.com/gerberfinance/gerberfinance.git"
#  set :scm, "git"
#  set :branch, "master"
#  set :deploy_via, :remote_cache

#set :application, "gerberfinance"
#  set :deploy_to, "/sjoseph/gerber/gf_footer/#{application}"
#  set :user, "gerberfinance"
#  set :admin_runner, "deploy"
  
  
  
  

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

#role :app, "dev.gerberfinance.com"                         # Your HTTP server, Apache/etc
#role :web, "dev.gerberfinance.com"                          # This may be the same as your `Web` server
#role :db,  "dev.gerberfinance.com", :primary => true # This is where Rails migrations will run

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#  task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end