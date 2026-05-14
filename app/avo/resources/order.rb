class Avo::Resources::Order < Avo::BaseResource
  # self.includes = []
  # self.attachments = []
  # self.search = {
  #   query: -> { query.ransack(id_eq: params[:q], m: "or").result(distinct: false) }
  # }

  def fields
    field :id, as: :id
    field :total, as: :text
    field :payment_terms, as: :number
    field :customer, as: :belongs_to
  end
end
