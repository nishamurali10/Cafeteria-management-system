class CreateOrders < ActiveRecord::Migration[7.2]
  def change
    create_table :orders do |t|
      t.integer :qty
      t.decimal :total,precision: 30, scale: 10
      t.integer :payment_terms

      t.timestamps
    end
  end
end
