class BooksController < ApplicationController
  attr_accessor :books
  @@prior_list ||= Book.order("name").page(1)

  def index
    if params[:query]
      search_by = params[:search].downcase
      query = params[:query]
      book_list = Book.all
      @books = []
      book_list.each do |book|
        search_term = search_by
        if search_by == "book title"
          search_term = book[:name]
        elsif search_by == "publisher"
          search_term = book[:publisher]
        elsif search_by == "author"
          search_term = book.author.name
        elsif search_by == "category"
          search_term = book.categories.first.name
        # elsif search_by == "price"
        #   search_term = book[:price]
        # elsif search_by == "isbn"
        #   search_term = book[:isbn]
        end
        if search_term.downcase.include? query.downcase
          @books << book
        end
      end
      @books = Kaminari.paginate_array(@books).page(params[:page]).per(25)
      return @books
    end
    # @books = Book.all
    @books = Book.order("name").page(params[:page])
  end

  def sort
    @books = Book.order(params[:sort_by]).page(params[:page])
    if @books == @@prior_list
      @books = Book.order(params[:sort_by] + " desc").page(params[:page])
    end
    @@prior_list = @books
    render :index
  end

  def category
    @books = separate_by_category(params[:format])
    @books = Kaminari.paginate_array(@books).page(params[:page]).per(25)
    @@prior_list = @books
    render :index
  end

  def publisher
    @books = separate_by_publisher(params[:format])
    @books = Kaminari.paginate_array(@books).page(params[:page]).per(25)
    @@prior_list = @books
    render :index
  end

  def separate_by_category category
    separate_by "category", category
  end

  def separate_by_publisher publisher
    separate_by "publisher", publisher
  end

  def show
    @book = Book.find(params[:id])
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def separate_by type, separator
    separated_books = []
    @books = Book.order("name")
    @books.each do |book|
      if type == "category"
        book.categories.each do |category|
          if category.id == separator.to_i
            separated_books << book
          end
        end
      elsif type == "publisher"
        if book.publisher == separator
          separated_books << book
        end
      end
    end
    separated_books
  end

end
