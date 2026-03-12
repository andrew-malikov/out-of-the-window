# Ruby sample
module Billing
  TAX_RATE = 0.08

  Item = Struct.new(:name, :price, keyword_init: true)

  def self.total(items)
    subtotal = items.sum(&:price)
    (subtotal * (1 + TAX_RATE)).round(2)
  end
end

items = [
  Billing::Item.new(name: "Notebook", price: 12.5),
  Billing::Item.new(name: "Pen", price: 2.25)
]

puts "Total: #{Billing.total(items)}"
