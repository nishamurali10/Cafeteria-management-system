class CreateFoods < ActiveRecord::Migration[7.2]
  def change
    create_table :foods do |t|
      t.string :name
      t.text :description
      t.decimal :price,precision: 30, scale: 10

      t.timestamps
    end
  end
end
