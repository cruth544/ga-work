class Product < ActiveRecord::Base
  has_and_belongs_to_many :orders
  has_many :users, through: :orders
end
