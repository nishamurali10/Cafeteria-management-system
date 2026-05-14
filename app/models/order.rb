class Order < ApplicationRecord
  before_save :calculate_value

  enum :payment_terms, {cash: 0, cheque: 1, upi: 2, card: 3}
  has_many :order_items
  has_many :foods, through: :order_items
  belongs_to :customer

  accepts_nested_attributes_for :order_items, reject_if: :all_blank, allow_destroy: true


  validates :payment_terms, presence: true

  def calculate_value
    self.total = order_items.sum(&:total)
  end
end
