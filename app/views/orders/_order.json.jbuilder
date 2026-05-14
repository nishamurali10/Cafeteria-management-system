json.extract! order, :id, :qty, :total, :payment_terms, :created_at, :updated_at
json.url order_url(order, format: :json)
