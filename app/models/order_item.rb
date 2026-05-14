class OrderItem < ApplicationRecord
  belongs_to :food
  belongs_to :order

  def total
    self.total = (price || 0.0) * qty
  end
end
