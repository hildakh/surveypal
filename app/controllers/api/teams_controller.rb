class Api::TeamsController < ApplicationController

  def index
    teams = Team.all
    render json: teams
   end

  def show
  end

end