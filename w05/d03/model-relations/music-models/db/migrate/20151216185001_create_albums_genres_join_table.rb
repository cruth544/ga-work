class CreateAlbumsGenresJoinTable < ActiveRecord::Migration
  def change
    create_join_table :albums, :genres
  end
end
