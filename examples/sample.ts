// TypeScript sample
type Role = "admin" | "member";

interface User {
  id: number;
  name: string;
  role: Role;
}

class Repo<T extends { id: number }> {
  private items = new Map<number, T>();

  upsert(item: T): void {
    this.items.set(item.id, item);
  }

  find(id: number): T | undefined {
    return this.items.get(id);
  }
}

const repo = new Repo<User>();
repo.upsert({ id: 1, name: "Andrew", role: "admin" });
console.log(repo.find(1)?.name ?? "missing");
