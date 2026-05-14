class Food < ApplicationRecord
  belongs_to :category
  has_many :order_items
  has_many :foods, through: :order_items
end
