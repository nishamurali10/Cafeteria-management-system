class RemoveQtyFromOrder < ActiveRecord::Migration[7.2]
  def change
    remove_column :orders, :qty, :integer
  end
end
