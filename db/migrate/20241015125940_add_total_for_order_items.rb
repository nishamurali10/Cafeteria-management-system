class AddTotalForOrderItems < ActiveRecord::Migration[7.2]
  def change
    add_column :order_items, :total, :decimal, precision: 30, scale: 10
  end
end
