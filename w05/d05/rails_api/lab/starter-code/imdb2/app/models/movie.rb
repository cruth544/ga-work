class Movie < ActiveRecord::Base
  validates :title, presence: true
  has_and_belongs_to_many :actors
  has_many :reviews


end
