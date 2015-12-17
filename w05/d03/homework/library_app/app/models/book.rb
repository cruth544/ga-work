class Book < ActiveRecord::Base
  belongs_to :author
  has_and_belongs_to_many :categories
  paginates_per 25

end
