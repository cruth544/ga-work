class CreateOrdersProductsJoinTable < ActiveRecord::Migration
  def change
    create_join_table :orders, :products
  end
end
