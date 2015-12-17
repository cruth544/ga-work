class CreateBooksCategoriesJoinTable < ActiveRecord::Migration
  def change
    create_join_table :books, :categories
  end
end
