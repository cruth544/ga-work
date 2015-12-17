class Category < ActiveRecord::Base
  has_and_belongs_to_many :books
  has_many :authors, through: :books

  def self.list
    ["Self-Help", "Cooking", "Science-Fiction", "Fiction", "Non-Fiction", "Horror", "Romance"].sort!
  end
end
