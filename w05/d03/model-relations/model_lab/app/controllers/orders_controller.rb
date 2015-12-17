class OrdersController < ApplicationController
  def index
    render json: Order.all
  end

  def show
  end

  def create
    render json: Order.create(name: Faker::App.name)
  end

  def edit
  end

  def delete
  end
end
