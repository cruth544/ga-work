class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :name
      t.integer :isbn
      t.decimal :price, precision: 10, scale: 2
      t.text :description
      t.string :publisher
      t.integer :author_id

      t.timestamps null: false
    end
  end
end
