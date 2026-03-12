// C++ sample
#include <iostream>
#include <string>
#include <vector>

struct Item {
    std::string name;
    double price;
};

double total(const std::vector<Item>& items) {
    double sum = 0.0;
    for (const auto& item : items) {
        sum += item.price;
    }
    return sum;
}

int main() {
    std::vector<Item> items{{"Keyboard", 79.5}, {"Mouse", 24.0}};
    std::cout << "Total: " << total(items) << '\n';
    return 0;
}
