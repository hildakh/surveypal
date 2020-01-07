class Api::TeamsController < ApplicationController

  def index
    teams = Team.first
    render json: teams
   end

  def show

  end

end