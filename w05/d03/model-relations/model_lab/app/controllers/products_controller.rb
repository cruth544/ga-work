class ProductsController < ApplicationController
  def index
    render json: Product.all
  end

  def create
    render json: Product.create(name: Faker::Hipster.word)
  end

  def show
  end

  def edit
  end

  def delete
  end
end
