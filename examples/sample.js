// JavaScript sample
const Status = Object.freeze({ ACTIVE: "active", DISABLED: "disabled" });

class CartService {
  #taxRate = 0.07;

  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async total(items = []) {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const taxed = subtotal * (1 + this.#taxRate);
    const formatted = `${taxed.toFixed(2)} USD`;
    return formatted ?? "0.00 USD";
  }
}

export async function run() {
  const service = new CartService({ get: async () => ({ ok: true }) });
  console.log(await service.total([{ price: 19.99, qty: 2 }]));
}
