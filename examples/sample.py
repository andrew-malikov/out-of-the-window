# Python sample
from dataclasses import dataclass
from typing import Final

PI: Final[float] = 3.14159

@dataclass
class Circle:
    radius: float

    def area(self) -> float:
        return PI * self.radius ** 2


def summarize(values: list[int]) -> dict[str, float]:
    total = sum(values)
    avg = total / len(values) if values else 0.0
    return {"total": float(total), "avg": avg}


if __name__ == "__main__":
    c = Circle(radius=2.5)
    print(f"area={c.area():.2f}", summarize([1, 2, 3, 4]))
