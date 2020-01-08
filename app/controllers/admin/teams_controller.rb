class Admin::TeamsController < ApplicationController

  # http_basic_authenticate_with name: ENV["WEBSITE_USERNAME"], password: ENV["WEBSITE_PASSWORD"]

  def index
    teams = Team.all.select(:id, :name, :description, :purpose, :user_id)
    render json: teams
  end

  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

end