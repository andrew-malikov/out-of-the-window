# Elixir sample
defmodule Billing do
  @tax_rate 0.08

  defmodule Item do
    defstruct [:name, :price]
  end

  def total(items) when is_list(items) do
    subtotal = Enum.reduce(items, 0.0, fn %{price: p}, acc -> acc + p end)
    Float.round(subtotal * (1.0 + @tax_rate), 2)
  end

  def format_currency(amount) when is_float(amount) do
    "$" <> :erlang.float_to_binary(amount, decimals: 2)
  end
end

items = [
  %Billing.Item{name: "Notebook", price: 12.50},
  %Billing.Item{name: "Pen", price: 2.25},
  %Billing.Item{name: "Sticker", price: 1.00}
]

total = Billing.total(items)
IO.puts("Total: #{Billing.format_currency(total)}")
