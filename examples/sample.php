<?php
// PHP sample

declare(strict_types=1);

enum Tier: string {
    case Free = 'free';
    case Pro = 'pro';
}

final class Plan {
    public function __construct(
        public readonly string $name,
        public readonly Tier $tier,
        public readonly float $price,
    ) {}
}

$plans = [new Plan('Starter', Tier::Free, 0.0), new Plan('Team', Tier::Pro, 29.0)];
$total = array_reduce($plans, fn(float $sum, Plan $p) => $sum + $p->price, 0.0);
echo "Total: {$total}\n";
