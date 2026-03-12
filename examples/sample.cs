// C# sample
using System;
using System.Collections.Generic;
using System.Linq;

public enum Priority { Low, Medium, High }

public record TaskItem(int Id, string Title, Priority Priority);

public static class Program
{
    public static decimal Score(IEnumerable<TaskItem> tasks)
    {
        return tasks.Sum(t => t.Priority switch
        {
            Priority.Low => 1m,
            Priority.Medium => 2.5m,
            Priority.High => 4m,
            _ => 0m
        });
    }

    public static void Main()
    {
        var tasks = new[] { new TaskItem(1, "Ship", Priority.High), new TaskItem(2, "Docs", Priority.Medium) };
        Console.WriteLine($"Score = {Score(tasks)}");
    }
}
