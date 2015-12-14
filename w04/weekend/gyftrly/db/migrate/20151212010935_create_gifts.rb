class CreateGifts < ActiveRecord::Migration
  def change
    create_table :gifts do |t|
      t.string :title
      t.string :recipient
      t.string :image_url
      t.text :description
      t.boolean :is_purchased
      t.decimal :price, precision: 10, scale: 2

      t.timestamps null: false
    end
  end
end
