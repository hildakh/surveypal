class Api::TeamsController < ApplicationController

  def index
    teams = Team.all.select(:id, :name, :description, :purpose)
    render json: teams
   end

  def show

  end

end