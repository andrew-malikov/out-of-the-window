// F# sample
module Sample

type Level =
    | Info
    | Warn
    | Error

type Event = {
    Id: int
    Level: Level
    Message: string
}

let weight level =
    match level with
    | Info -> 1.0
    | Warn -> 2.5
    | Error -> 5.0

let score (events: Event list) =
    events
    |> List.map (fun e -> weight e.Level)
    |> List.sum

let summarize events =
    events
    |> List.groupBy (fun e -> e.Level)
    |> List.map (fun (level, xs) -> level, xs.Length)
    |> Map.ofList

[<EntryPoint>]
let main _ =
    let events = [
        { Id = 1; Level = Info;  Message = "Started" }
        { Id = 2; Level = Warn;  Message = "Retrying" }
        { Id = 3; Level = Error; Message = "Failed" }
    ]

    printfn "Score: %.2f" (score events)
    printfn "Summary: %A" (summarize events)
    0
