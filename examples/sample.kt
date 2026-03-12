// Kotlin sample
enum class Level { INFO, WARN, ERROR }

data class Event(val id: Int, val level: Level, val message: String)

fun summarize(events: List<Event>): Map<Level, Int> =
    events.groupingBy { it.level }.eachCount()

fun main() {
    val events = listOf(
        Event(1, Level.INFO, "Started"),
        Event(2, Level.ERROR, "Failed")
    )
    println(summarize(events))
}
