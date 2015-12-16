class HeroesController < ApplicationController
  @@descending = false
  @@prior_list

  def index
    if params[:query]
      search_by = params[:search].to_sym
      hero_list = Hero.all
      query = params[:query]
      @heroes = []
      hero_list.each do |hero|
        if hero[search_by].downcase.include? query.downcase
          @heroes << hero
        end
      end
      return @heroes
    end
    @paginate = true
    @heroes = Hero.page(params[:page]).per(5)
  end

  def show
    if params[:commit] == "Next"
      hero = Hero.find(params[:id].to_i + 1)
      redirect_to hero_path(hero)
    elsif params[:commit] == "Prev"
      hero = Hero.find(params[:id].to_i - 1)
      redirect_to hero_path(hero)
    elsif params[:commit] == "Go"
      @hero = Hero.find(params[:hero_id])
    else
      @hero = Hero.find(params[:id])
    end
  end

  def sort
    @heroes = Hero.order(params[:sort_by])
    if @@descending
      @heroes = Hero.order(params[:sort_by] + " desc")
    end
    @@descending = !@@descending
    render :index
  end

end




















































