class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show

  end

  def create
    render json: User.create(name: Faker::Name.name)
  end

  def edit
  end

  def delete
    render json: User.destroy(params[:id])
  end
end
