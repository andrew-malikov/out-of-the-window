// Java sample
import java.util.List;

public class Sample {
    enum State { OPEN, CLOSED }

    static class Invoice {
        final String id;
        final double amount;

        Invoice(String id, double amount) {
            this.id = id;
            this.amount = amount;
        }
    }

    static double total(List<Invoice> invoices) {
        return invoices.stream().mapToDouble(i -> i.amount).sum();
    }

    public static void main(String[] args) {
        var invoices = List.of(new Invoice("A-1", 49.99), new Invoice("A-2", 10.00));
        System.out.println("Total: " + total(invoices));
    }
}
