class Avo::Resources::OrderItem < Avo::BaseResource
  # self.includes = []
  # self.attachments = []
  # self.search = {
  #   query: -> { query.ransack(id_eq: params[:q], m: "or").result(distinct: false) }
  # }

  def fields
    field :id, as: :id
    field :qty, as: :text
    field :price, as: :text
    field :food, as: :belongs_to
    field :order, as: :belongs_to
  end
end
