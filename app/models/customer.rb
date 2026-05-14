class Customer < ApplicationRecord

  validates :phone, presence: true, uniqueness: true
  validates :name, presence: true

  has_many :orders
end
