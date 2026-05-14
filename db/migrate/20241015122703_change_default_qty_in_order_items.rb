class ChangeDefaultQtyInOrderItems < ActiveRecord::Migration[7.2]
  def change
    change_column :order_items, :qty, :integer, default: 1, null: false
  end
end
