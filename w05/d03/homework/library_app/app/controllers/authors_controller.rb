class AuthorsController < ApplicationController
  @@prior_list ||= Author.order("name").page(1)


  def index
    @authors = Author.order("name").page(params[:page])
  end

  def sort
    @authors = Author.order(params[:sort_by]).page(params[:page])
    if @authors == @@prior_list
      @authors = Author.order(params[:sort_by] + " desc").page(params[:page])
    end
    @@prior_list = @authors
    render :index
  end

  def show
    @author = Author
  end

  def create
  end

  def update
  end

  def destroy
  end
end
