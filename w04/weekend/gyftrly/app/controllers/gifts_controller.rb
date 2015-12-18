class GiftsController < ApplicationController
  private
  attr_accessor :sorted_by

  public
  attr_accessor :gifts
  @gift
  @gifts
  @gift_total

#############################GETTER METHODS#############################
  def gifts
    @gifts = merge_sort(Gift.all, "title")
    self.gift_total
  end

  def gift_total
    total = 0
    @gifts.each do |gift|
      total += gift.price
      @gift_total = total
    end
  end
##################################SORT##################################

  def sort_title
    self.gifts
  end

  def sort_friend
    self.gifts = merge_sort self.gifts, "friend"
  end

  def sort_price
    self.gifts = merge_sort(self.gifts, "price")
  end

  def sort_purchased
    front_list = []
    end_list = []
    self.gifts.each do |gift, index|
      if gift.is_purchased
        front_list.push(gift)
      else
        end_list.push(gift)
      end
    end
    self.gifts = (front_list << end_list).flatten!
  end

#############################SERVER METHODS#############################
  def index
    self.gifts
  end

  def show
    puts "GIFT!!"
    puts @gift
    gift
    puts @gift
  end

  def edit
    gift
  end

  def new
    @gift = Gift.new
  end

  def create
    # gift_params is a custom private method for shorter code
    @gift = Gift.new(gift_params)

    if is_valid? @gift
      if @gift.save
        return redirect_to gift_path(@gift)
      end
    end
    render :new
  end

  def update
    gift
    updated_gift = @gift
    updated_gift.update_attributes(gift_params)
    if is_valid?(updated_gift)
      if @gift.update_attributes(gift_params)
        return redirect_to gift_path(@gift)
      end
    end
    render :edit
  end

  def destroy
    gift.destroy
    redirect_to gifts_path
  end

###########################PRIVATE METHODS##############################
  private

  def gift
    @gift = Gift.find(params[:id])
  end

  def is_valid? gift
    if gift.title != ""
      if gift.recipient != ""
        if gift.image_url != ""
          if gift.description != ""
            if gift.price.is_a? Numeric
              if !!gift.is_purchased == gift.is_purchased
                return true
              end
            end
          end
        end
      end
    end
    return false
  end

  def gift_params
    params.require(:gift).permit(:title, :recipient, :image_url, :description, :is_purchased, :price)
  end

  def merge_sort(lst, sort_by)
    self.sorted_by = sort_by
    if lst.length <= 1
      lst
    else
      mid = (lst.length / 2).floor
      left = merge_sort(lst[0..mid - 1], sort_by)
      right = merge_sort(lst[mid..lst.length], sort_by)
      merge(left, right, sort_by)
    end
  end

  def merge(left, right, sort_by)
    if left.empty?
      return right
    elsif right.empty?
      return left
    end

    if sort_by == "title"
      left_side = left.first.title
      right_side = right.first.title
    elsif sort_by == "friend"
      left_side = left.first.recipient
      right_side = right.first.recipient
    elsif sort_by == "price"
      left_side = left.first.price
      right_side = right.first.price
    end

    if left_side < right_side
      [left.first] + merge(left[1..left.length], right, sort_by)
    else
      [right.first] + merge(left, right[1..right.length], sort_by)
    end
  end

end
















































