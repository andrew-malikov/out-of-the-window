// Scala sample
object Sample {
  enum Kind:
    case Public, Private

  case class Note(id: Int, kind: Kind, text: String)

  def countPublic(notes: List[Note]): Int =
    notes.count(_.kind == Kind.Public)

  @main def run(): Unit =
    val notes = List(Note(1, Kind.Public, "Hello"), Note(2, Kind.Private, "Secret"))
    println(s"public=${countPublic(notes)}")
}
