// Rust sample
#[derive(Debug, Clone)]
struct Product {
    name: String,
    price: f64,
}

fn total(items: &[Product]) -> f64 {
    items.iter().map(|p| p.price).sum()
}

fn main() {
    let items = vec![
        Product { name: "SSD".into(), price: 129.0 },
        Product { name: "RAM".into(), price: 89.5 },
    ];

    let amount = total(&items);
    println!("total={amount:.2}, first={}", items[0].name);
}
