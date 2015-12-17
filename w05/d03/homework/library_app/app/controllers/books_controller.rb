class BooksController < ApplicationController
  attr_accessor :books
  @@prior_list ||= Book.order("name").page(1)
  @@category = false

  def index
    # @books = Book.all
    @books = Book.order("name").page(params[:page])
  end

  def sort
    unless @@category
      @books = Book.order(params[:sort_by]).page(params[:page])
      if @books == @@prior_list
        @books = Book.order(params[:sort_by] + " desc").page(params[:page])
      end
      @@category_view = false
    else
      return category
    end
    @@prior_list = @books
    render :index
  end

  def category
    if params[:format]
      @@category = params[:format]
    end
    sort_category @@category
    render :index
  end

  def sort_category category
    @books = separate_by_category(category)
    if @books == @@prior_list
      asdf
      @books.reverse!
    end
    @books = Kaminari.paginate_array(@books).page(params[:page]).per(25)
    @@prior_list = @books
  end

  def separate_by_category category
    books_by_category = []
    @books = Book.order("name")
    @books.each do |book|
      book.categories.each do |cat|
        if cat.id == category.to_i
          books_by_category << book
        end
      end
    end
    books_by_category
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
