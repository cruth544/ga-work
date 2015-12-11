class BeansController < ApplicationController
  @bean

  def index
    @beans = Bean.all
  end

  def show
    bean
  end

  def edit
    bean
  end

  def update
    bean

    if @bean.update_attributes(bean_params)
      redirect_to bean_path(@bean)
    else
      render :edit
    end
  end

  def new
    @bean = Bean.new
  end

  def create
    @bean = Bean.new(bean_params)

    if @bean.save
      redirect_to bean_path(@bean)
    else
      render :new
    end
  end

  def destroy
    bean.destroy
    redirect_to beans_path
  end

  private

  def bean
    @bean = Bean.find(params[:id])
  end

  def bean_params
    params.require(:bean).permit(:name, :roast, :origin, :quantity)
  end

end

















































