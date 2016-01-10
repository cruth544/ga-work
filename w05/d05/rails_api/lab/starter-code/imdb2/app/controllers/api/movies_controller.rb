module API
  class MoviesController < ApplicationController

    def index
      render json: Movie.all
    end

    def show
      render json: Movie.find(params[:id])
    end

    def create
      movie = Movie.new(movie_params)

      if movie.save
        render json: movie, status: 204, location: [:api, movie]
      else
        render json: movie.errors, status: 422
      end
    end

    def update
      movie = get_movie

      if movie.update_attributes(movie_params)
        head 204
      else
        render json: movie.errors, status: 422
      end
    end

    def destroy
      movie = get_movie

      if movie.destroy
        head 204
      else
        render json: movie.errors, status: 422
      end
    end

    private
    def get_movie
      Movie.find(params[:id])
    end

    def movie_params
      params.require(:movie).permit(:title, :summary, :youtube_embed_id, :thumbnail)
    end

  end
end
