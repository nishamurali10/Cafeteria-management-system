class AddCategoryIdToFood < ActiveRecord::Migration[7.2]
  def change
    add_reference :foods, :category, null: false, foreign_key: true
  end
end
